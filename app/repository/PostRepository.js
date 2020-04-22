const {SqlRepository} = require("../data/sqltemplate");
var PostRepository = function () {
    this.tabName = 'post';
    this.cols = [{
        name: 'id',
        type: 'int',
        notNull: true,
        isPrimary: true,
        isFinal: false,
        isAutoIncrement: true
    }, {
        name: 'post_title',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'post_body',
        type: 'TEXT',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'posted_user',
        type: 'int',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'category_id',
        type: 'int',
        notNull: true,
        isPrimary: false,
        isFinal: true
    }];

    var rest = 'CONSTRAINT fk_user_post FOREIGN KEY (posted_user) REFERENCES user(id), CONSTRAINT fk_post_category FOREIGN KEY (category_id) REFERENCES category(id)';

    SqlRepository.call(this.tabName, this.cols, rest);
};

PostRepository.prototype = Object.create(SqlRepository.prototype);
PostRepository.prototype.constructor = PostRepository;

exports.PostRepository = PostRepository;
