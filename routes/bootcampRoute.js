const express = require('express');
const router = express.Router();

const {
    filterRequestQueryObject
} = require('../middlewares');


const {
    getSingleBootcampController,
    getAllBootcampsController,
    createBootcampController
} = require('../controllers/bootcamp');


router
    .route('/:id')
    .get(getSingleBootcampController);


router
    .route('/')
    .get(filterRequestQueryObject, getAllBootcampsController)
    .post(createBootcampController);


module.exports = router;