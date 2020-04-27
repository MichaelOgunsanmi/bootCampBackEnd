const express = require('express');
const router = express.Router();

const {
    filterRequestQueryObject,
    doesBootcampExist
} = require('../middlewares');


const {
    getSingleBootcampController,
    getAllBootcampsController,
    getBootcampsWithinController,
    createBootcampController,
    updateBootcampController,
    deleteBootcampController
} = require('../controllers/bootcamp');


const courseRouter = require('./courseRoute');
router.use('/:bootcampId/courses', courseRouter);


router.get('/bootcamps-within/:zipcode/:radius', getBootcampsWithinController);


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