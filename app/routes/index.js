var express = require('express');
var router = express.Router();
var sqlTemplate = require('../data/sqltemplate');
var mysqlConn = require('../db/mysqlconn');

/* GET home page. */
router.get('/', function (req, res, next) {
    var db = new sqlTemplate.repo('testTable', [{
        colName: 'test1',
        colType: 'VARCHAR(255)',
        notNull: true,
        isPrimary: true,
        isFinal: false
    },
        {
            colName: 'test2',
            colType: 'VARCHAR(255)',
            notNull: false,
            isPrimary: false,
            isFinal: false
        },
        {
            colName: 'test3',
            colType: 'VARCHAR(255)',
            notNull: true,
            isPrimary: false,
            isFinal: true
        }
    ])

    db.findAll( mysqlConn.pool(),'testTable');
    // res.render('index', {title: 'Express'});
});

module.exports = router;
