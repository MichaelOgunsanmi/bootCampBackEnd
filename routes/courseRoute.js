const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    filterRequestQueryObject
} = require('../middlewares');


const {
    getSingleCourseController,
    getAllCoursesController,
    createCourseController
} = require('../controllers/course');



router
    .route('/')
    .get(filterRequestQueryObject, getAllCoursesController)
    .post(createCourseController);


router
    .route('/:id')
    .get(getSingleCourseController);


module.exports = router;