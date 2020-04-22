var express = require('express');
var cors = require('cors');
var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.use('/api/v1/users', usersRouter);

module.exports=router;