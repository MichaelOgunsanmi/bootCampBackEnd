const express = require('express');
const router = express.Router();

const exampleMiddleware = require('../middlewares/exampleMiddleware');


const {
    createBootcampController
} = require('../controllers/bootcamp');



router
    .route('/')
    .post(createBootcampController);


module.exports = router;