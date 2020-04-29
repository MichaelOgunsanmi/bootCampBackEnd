const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    filterRequestQueryObject,
    doesCourseExist,
    doesBootcampExist
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
    .post(doesBootcampExist, createCourseController);


router
    .route('/:id')
    .get(getSingleCourseController)
    .patch(doesCourseExist, updateCourseController)
    .delete(deleteCourseController);


module.exports = router;