import {UserService} from "../service/UserService";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/members', function(req, res, next) {
  var userService = new UserService();
  var userData = req.body;


  var result = userService.registerUser(userData);

  res.json(result);
});

router.
module.exports = router;
