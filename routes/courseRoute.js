const express = require('express');
const router = express.Router({ mergeParams: true});

const {
    filterRequestQueryObject
} = require('../middlewares');


const {
    getAllCoursesController
} = require('../controllers/course');



router
    .route('/')
    .get(filterRequestQueryObject, getAllCoursesController);


module.exports = router;