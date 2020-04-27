const express = require('express');

//routes
const bootcampRoute = require('../routes/bootcampRoute');
const courseRoute = require('../routes/courseRoute');
const error404Route = require('../routes/error404Route');

//middlewares
const {globalErrorHandler} = require('../middlewares');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use(express.json());

    //register routes
    app.use('/api/v1/bootcamps', bootcampRoute);
    app.use('/api/v1/courses', courseRoute);

    //register route handler for 404 requests
    app.use(error404Route);

    //Catches all errors and handles them
    app.use(globalErrorHandler);
};