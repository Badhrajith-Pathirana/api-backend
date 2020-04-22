

var express = require('express');
var {UserService} = require("../service/UserService");
var router = express.Router();

/* GET users listing. */
router.post('/members', function(req, res, next) {
  var userService = new UserService();
  var userData = req.body;


  var result = userService.registerUser(userData);

  res.json(result);
});

router.get('',(req,res) => {
  res.send("GET USERS");
}
);

module.exports = router;