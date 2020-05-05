const filterRequestQueryObject = require('./filterRequestQueryObject');
const globalErrorHandler = require('./globalErrorHandler');

const exampleMiddleware = require('./exampleMiddleware');

const {doesBootcampExist} = require('./bootcamp');

const {doesCourseExist} = require('./course');

const {
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    doesUserExist,
    getCurrentUser
} = require('./user');


module.exports = {
    globalErrorHandler,
    filterRequestQueryObject,
    doesBootcampExist,
    doesCourseExist,
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    doesUserExist,
    getCurrentUser
};