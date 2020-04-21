var mysql = require('mysql');

var pool = () => {
    return mysql.createConnection({
        user            : 'root',
        password        : '',
        database        : 'ipt-nsbm'
    });
}

module.exports.pool = pool;
