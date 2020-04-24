const express = require('express');
const router = express.Router();

const {
    filterRequestQueryObject,
    doesBootcampExist
} = require('../middlewares');


const {
    getSingleBootcampController,
    getAllBootcampsController,
    createBootcampController,
    updateBootcampController,
    deleteBootcampController
} = require('../controllers/bootcamp');


router
    .route('/:id')
    .get(getSingleBootcampController)
    .patch(doesBootcampExist, updateBootcampController)
    .delete(doesBootcampExist, deleteBootcampController);


router
    .route('/')
    .get(filterRequestQueryObject, getAllBootcampsController)
    .post(createBootcampController);


module.exports = router;