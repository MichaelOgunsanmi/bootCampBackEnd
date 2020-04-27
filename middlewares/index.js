const filterRequestQueryObject = require('./filterRequestQueryObject');
const globalErrorHandler = require('./globalErrorHandler');

const exampleMiddleware = require('./exampleMiddleware');

const {doesBootcampExist} = require('./bootcamp');

const {doesCourseExist} = require('./course');



module.exports = {
    globalErrorHandler,
    filterRequestQueryObject,
    doesBootcampExist,
    doesCourseExist
};