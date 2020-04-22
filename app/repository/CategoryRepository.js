import {SqlRepository} from "../data/sqltemplate";

var CategoryRepository = function () {
    this.tabName = 'category';
    this.cols = [{
        name: 'id',
        type: 'int',
        notNull: true,
        isPrimary: true,
        isFinal: false,
        isAutoIncrement: true
    }, {
        name: 'category',
        type: 'VARCHAR(255)',
        notNull: true,
        isPrimary: false,
        isFinal: false
    },];

    SqlRepository.call(this.tabName, this.cols, null);
};

CategoryRepository.prototype = Object.create(SqlRepository.prototype);
CategoryRepository.prototype.constructor = CategoryRepository;

exports.CategoryRepository = CategoryRepository;
