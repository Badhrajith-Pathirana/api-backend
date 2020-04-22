

var express = require('express');
var {UserService} = require("../service/UserService");
var router = express.Router();

/* GET users listing. */
router.post('', (req, res) => {
  console.log("REQ ::::::::::::::::::::::::::::::; ",req.body);
  var userService = new UserService();
  var userData = req.body;

  var result = userService.registerUser(userData);

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



// {
//   "info": {
//   "_postman_id": "7dd78341-4350-4b39-8477-76164656c495",
//       "name": "members",
//       "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
// },
//   "item": [
//   {
//     "name": "http://localhost:8080/api/v1/members",
//     "request": {
//       "method": "POST",
//       "header": [],
//       "body": {
//         "mode": "raw",
//         "raw": "{\n\t\"first_name\": \"NSBM\",\n\t\"national_id\":\"972601454v\",\n\t\"email\": \"ashankaushalya@gmail.com\",\n\t\"proffession\":\"SE\",\n\t\"affilidate\":\"ABC\",\n\t\"last_name\":\"Green\",\n\t\"user_type\": \"student\",\n\t\"username\":\"nsbm123\",\n\t\"password\":\"n145\",\n\t\"status\":0\n}",
//         "options": {
//           "raw": {
//             "language": "json"
//           }
//         }
//       },
//       "url": {
//         "raw": "http://localhost:8080/api/v1/members",
//         "protocol": "http",
//         "host": [
//           "localhost"
//         ],
//         "port": "8080",
//         "path": [
//           "api",
//           "v1",
//           "members"
//         ]
//       },
//       "description": "POST Members"
//     },
//     "response": []
//   }
// ],
//     "protocolProfileBehavior": {}
// }