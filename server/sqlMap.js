// SQL语句映射文件，以供api逻辑调用
// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(mobile, password) values (?, ?)',
        count: 'select count(t0.id) as num from user t0 where t0.mobile=?',
        validate: 'select t0.* from user t0 where t0.mobile=?',
        update: 'UPDATE user SET '
    }
}

module.exports = sqlMap;