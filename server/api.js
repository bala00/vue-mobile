// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
// const models = require('./db');
const mysql = require('mysql');
const models = require('./mysqldb');
const express = require('express');
const router = express.Router();
var $sql = require('./sqlMap');

var conn = mysql.createConnection(models.mysql)

conn.connect();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

var jsonWrite = function(res, ret) {

    console.log('ret--->',ret);

    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败,系统内部错误'
        });
    } else if(ret == '2') {
        res.json({
            code: '2',
            msg: '手机号已经注册'
        });
    }else if(ret == '-1'){
        res.json({
            code: '-1',
            msg: '该手机暂未注册！'
        });
    }else if(ret == '-2'){
        res.json({
            code: '-2',
            msg: '密码错误！'
        });
    }else{
        // res.json({ret});
        res.json({
            code: '0',
            data: ret
        })
    }
};

var sqlList = {
    name: 'name = ?',
    sex:'sex = ?',
    constellation:'constellation = ?',
    occupation:'occupation = ?',
    hobby:'hobby = ?',
    signature:'signature = ?'
}

// 登录
router.post('/login',(req,res) => {
    console.log('node router in login……');    
    var sql = $sql.user.validate;
    var sqlCount = $sql.user.count;
    var params = req.body;

    conn.query(sqlCount, [params.mobile],function(err, result){
        if(err){
            jsonWrite(res, '1');
        }
        if (result) {
            if(result[0].num > 0){
                conn.query(sql, [params.mobile], function(err, result) {
                    if (err) {
                        jsonWrite(res, '1');
                        return false;
                    }
                    var pwd = result[0].password;

                    if (params.password == pwd) {
                        // 用户登录状态存放在session中
                        // req.session.mobile = params.mobile;
                        jsonWrite(res, result);
            
                    }else{
                        jsonWrite(res, '-2');
                    }
                })
            }else{
                jsonWrite(res, '-1');
            }
        }
    })
});

// 注册
router.post('/addUser',(req, res) => {
    var sql = $sql.user.add;
    var sqlCount = $sql.user.count;
    var params = req.body;

    conn.query(sqlCount, [params.newMobile], function(err, result){
        if(err){
            jsonWrite(res, '1');
        }
        if(result){
            if(result[0].num < 1){
                conn.query(sql, [params.newMobile, params.newPassword], function(err, result){
                    if(err){
                        jsonWrite(res, '1');
                        return false
                    }
                    jsonWrite(res, result);
                })
            }
        }
    })
});

// 退出登录
// 若node端存储在session中，则需要新加一个接口：logout 退出时，销毁session
// req.session.destroy();

// 头像上传
router.post('/upload',(req, res) => {
    console.log('req--->',req)
});

// 修改用户信息
router.post('/modify',(req, res) => {
    var sql = $sql.user.update;
    var params = req.body;
    var _sql = sql + sqlList[params.listName] + ' where mobile=? ';

    conn.query(_sql,[params.listVal, params.mobile], function(err, result){
        if(err){
            jsonWrite(res, '1');
            return false;
        }
        jsonWrite(res, result);
    })
})

module.exports = router;
