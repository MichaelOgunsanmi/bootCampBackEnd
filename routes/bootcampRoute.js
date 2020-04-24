const express = require('express');
const router = express.Router();

const {
    filterRequestQueryObject
} = require('../middlewares');


const {
    getAllBootcampsController,
    createBootcampController
} = require('../controllers/bootcamp');



router
    .route('/')
    .get(filterRequestQueryObject, getAllBootcampsController)
    .post(createBootcampController);


module.exports = router;