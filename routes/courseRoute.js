const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    filterRequestQueryObject,
    doesCourseExist,
    doesBootcampExist,
    authenticateUser
} = require('../middlewares');


const {
    getSingleCourseController,
    getAllCoursesController,
    createCourseController,
    updateCourseController,
    deleteCourseController
} = require('../controllers/course');



router
    .route('/')
    .get(filterRequestQueryObject, getAllCoursesController)
    .post(authenticateUser, doesBootcampExist, createCourseController);


router
    .route('/:id')
    .get(getSingleCourseController)
    .patch(authenticateUser, doesCourseExist, updateCourseController)
    .delete(authenticateUser, deleteCourseController);


module.exports = router;