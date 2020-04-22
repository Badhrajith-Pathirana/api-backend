import {PostRepository} from "../repository/PostRepository";
import {CategoryRepository} from "../repository/CategoryRepository";
import {UserRepository} from "../repository/UserRepository";
import {CommentRepository} from "../repository/CommentRepository";

var mysqlConn = require('../db/mysqlconn');


var PostService = function () {
    this._postRepository = new PostRepository();
    this._categoryRepository = new CategoryRepository();
    this._userRepository = new UserRepository();
    this._commentRepository = new CommentRepository();
};

PostService.prototype.createPost = function (postData) {
    var connection = mysqlConn.pool();

    var userCols = [{
        name: 'id',
        value: postData.user_id,
        condition: '=',
        isStringData: false,
    }];

    var userResult = this._userRepository.findBy(connection, userCols);

    if (userResult === null || userResult[0].status !== 1) {

        return {
            code: 41002     // code for user not eligible to post
        }
    }

    var cols = [{
        name: 'post_title',
        value: postData.title,
        isStringData: true
    }, {
        name: 'post_body',
        value: postData.body,
        isStringData: true
    }, {
        name: 'posted_user',
        value: postData.user_id,
        isStringData: false
    }, {
        name: 'category_id',
        value: postData.category_id,
        isStringData: false
    }];

    var result = this._postRepository.insert(connection, cols);

    if (result !== null) {

        return result;
    } else {

        return {
            code: 41001     // code for post not saved properly
        }
    }
};

PostService.prototype.findPostByCategory = function (category) {
    var connection = mysqlConn.pool();

    var cols = [{
        name: 'category',
        value: category,
        condition: '=',
        isStringData: true,
    }];

    var categoryResult = this._categoryRepository.findBy(connection, cols);

    if (categoryResult === null || categoryResult.length <= 0) {

        return {
            code: 41003     // code for category not found
        }
    }

    var categoryId = categoryResult[0].id;

    var postCols = [{
        name: 'category_id',
        value: categoryId,
        condition: '=',
        isStringData: false,
    }];

    var postResults = this._postRepository.findBy(connection, postCols);

    if (postResults === null) {

        return {
            code: 41004     // code for error with post retrieving;
        }
    } else {
        return postResults;
    }
};


