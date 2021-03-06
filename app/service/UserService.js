var mysqlConn = require('../db/mysqlconn');
var {UserRepository} = require("../repository/UserRepository");

var UserService = function () {
    this.userRepository = new UserRepository();
    console.log(this.userRepository);
};

UserService.prototype.loginUser = function (userData) {
    var connection = mysqlConn.pool();

    var cols = [{
        name: 'username',
        condition: '=',
        value: userData.username,
        nextCond: 'AND'
    }, {
        name: 'password',
        condition: '=',
        value: userData.password
    }];
    var result = this.userRepository.findBy('user',connection, cols);

    if (result !== null) {

        result.password = null;
        if (result.status === 1) {
            return result;
        } else {
            return {
                code: '40001' // code for user have no access to the system
            }
        }
    } else {

        return {
            code: '40002' // code for username or password invalid
        }
    }
};

UserService.prototype.registerUser = function (userData)  {
    console.log("SERVICE DATA ::::::::::::::::::::::::::::::",userData);
    var connection = mysqlConn.pool();

    var cols = [{
        name: 'first_name',
        value: userData.firstName,
        isStringData: true
    }, {
        name: 'last_name',
        value: userData.lastName,
        isStringData: true
    }, {
        name: 'user_type',
        value: userData.userType === 'exp' ? 'EXPERT' : userData.userType === 'std' ? 'STUDENT' : null,
        isStringData: true
    }, {
        name: 'username',
        value: userData.username,
        isStringData: true
    }, {
        name: 'national_id',
        value: userData.nic,
        isStringData: true
    }, {
        name: 'email',
        value: userData.email,
        isStringData: true
    }, {
        name: 'profession',
        value: userData.profession,
        isStringData: true
    }, {
        name: 'affilidate',
        value: userData.afflidate,
        isStringData: true
    }, {
        name: 'password',
        value: userData.password,
        isStringData: true
    }, {
        name: 'status',
        value: 0,
        isStringData: false
    }];
    console.log(this);

    var result = this.userRepository.insert('user',connection, cols);

    if (result !== null) {

        if (result.password) {
            result.password = null;
        }
        return result;
    } else {

        return {
            code: 40003     // code for error with user registration
        }
    }

};

UserService.prototype.findUnAcceptedUsers = function() {
    var connection = mysqlConn.pool();


    var cols = [{
        name: 'status',
        value: 0,
        condition: '=',
        isStringData: false,
    }];

    var results = this.userRepository.findBy('user',connection, cols);



    results.forEach(res => {
        res.password = null;
    });

    return results;
};

UserService.prototype.acceptOrDeclineUser = function (userId, statusId) {
    var connection = mysqlConn.pool();


    var cols = [{
        name: 'id',
        value: userId,
        condition: '=',
        isStringData: false
    }];

    var result = this.userRepository.findBy('user',connection, cols);

    if (result === null) return {
        code: 40004     // code to user not found
    };

    var updateCols = [{
        name: 'status',
        value: statusId,
        isStringData: false
    }];

    var updateConds = [{
        name: 'id',
        value: userId,
        isStringData: false,
        condition: '='
    }];

    var updateResult = this.userRepository.update('user',connection, updateCols, updateConds);

    if (updateResult === null) {


        return updateResult;
    } else {


        return {
            code: 40005     //  code for user update fail
        }
    }
};

exports.UserService = UserService;
