const {SqlRepository} = require("../data/sqltemplate");
function UserRepository() {
    this.tabName = 'user';
    this.cols = [{
        name: 'id',
        type: 'int',
        notNull: true,
        isPrimary: true,
        isAutoIncrement: true,
        isFinal: false
    }, {
        name: 'first_name',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'national_id',
        type: 'VARCHAR(20)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'email',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'profession',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    },{
        name: 'affilidate',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'last_name',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'user_type',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'username',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'password',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    }, {
        name: 'status',
        type: 'int',
        notNull: true,
        isPrimary: false,
        isFinal: true
    }];

    SqlRepository.call('','user', this.cols, []);
};

UserRepository.prototype = Object.create(SqlRepository.prototype);
UserRepository.prototype.constructor = UserRepository;

exports.UserRepository = UserRepository;
