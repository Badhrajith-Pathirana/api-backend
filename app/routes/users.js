

var express = require('express');
var {UserService} = require("../service/UserService");
var router = express.Router();

/* GET users listing. */
router.post('', (req, res) => {
  console.log("REQ ::::::::::::::::::::::::::::::; ",req.body);
  var userService = new UserService();
  var userData = req.body;

  var result = userService.registerUser(req);

  res.send("POST USERS");

});

router.get('',(req,res) => {
  res.send("GET USERS");
}
);

router.put('/:id',(req,res) => {
  console.log("REQ PARAM :::::::::::::::: ",req.params.id);

});

router.delete('/:id',(req,res) => {
  console.log("REQ PARAM :::::::::::::::: ",req.params.id);

});

module.exports = router;



