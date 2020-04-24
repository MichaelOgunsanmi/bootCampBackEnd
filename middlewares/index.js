const filterRequestQueryObject = require('./filterRequestQueryObject');
const globalErrorHandler = require('./globalErrorHandler');

const exampleMiddleware = require('./exampleMiddleware');

const {doesBootcampExist} = require('./bootcamp');



module.exports = {
    globalErrorHandler,
    filterRequestQueryObject,
    doesBootcampExist
};