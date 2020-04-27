const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    filterRequestQueryObject
} = require('../middlewares');


const {
    getAllCoursesController,
    createCourseController
} = require('../controllers/course');



router
    .route('/')
    .get(filterRequestQueryObject, getAllCoursesController)
    .post(createCourseController);


module.exports = router;