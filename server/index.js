// 引入编写好的api
const api = require('./api');
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
const cookieParser = require('cookie-parser');
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express');
const session = require('express-session');
const SessionStore = require('express-mysql-session');
const models = require('./mysqldb');

const app = express();

//这里传入了一个密钥加session id
app.use(cookieParser('XSJKO012012DDFFBJK'));
//使用就靠这个中间件
app.use(session({ 
    key: 'VUEMOBILE',  
    secret: 'XSJKO012012DDFFBJK',  
    store: new SessionStore(models.mysql),
    resave: true,
    saveUninitialized: true
}));

// 即使在创建cookieParser时(传入了secret字符串) , cookie也不会自动加密, 需要使用res.cookie(name, value , {singed: true}) 去创建加密的cookie, 以及使用req.signedCookies来获取解密后的cookie, 理解是否准确

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/api', api);

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))

// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})

// 监听8088端口
app.listen(8002);
console.log('success listen…………8002');