const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    filterRequestQueryObject,
    doesCourseExist
} = require('../middlewares');


const {
    getSingleCourseController,
    getAllCoursesController,
    createCourseController,
    updateCourseController
} = require('../controllers/course');



router
    .route('/')
    .get(filterRequestQueryObject, getAllCoursesController)
    .post(createCourseController);


router
    .route('/:id')
    .get(getSingleCourseController)
    .patch(doesCourseExist, updateCourseController);


module.exports = router;