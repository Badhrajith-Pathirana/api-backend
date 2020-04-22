const {SqlRepository} = require("../data/sqltemplate");
var CommentRepository = function () {
    this.tabName = 'comment';
    this.cols = [{
        name: 'id',
        type: 'int',
        notNull: true,
        isPrimary: true,
        isFinal: false,
        isAutoIncrement: true
    }, {
        name: 'comment',
        type: 'TEXT',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'user_id',
        type: 'int',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'post_id',
        type: 'int',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }];

    var rest = 'CONSTRAINT fk_comment_post FOREIGN KEY (post_id) REFERENCES post(id), CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES user(id)';
    SqlRepository.call(this.tabName, this.cols, rest);
};

CommentRepository.prototype = Object.create(SqlRepository.prototype);
CommentRepository.prototype.constructor = CommentRepository;

exports.CommentRepository = CommentRepository;
