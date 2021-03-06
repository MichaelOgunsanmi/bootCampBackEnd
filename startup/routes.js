const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

//routes
const bootcampRoute = require('../routes/bootcampRoute');
const courseRoute = require('../routes/courseRoute');
const authRoute = require('../routes/authRoute');
const userRoute = require('../routes/userRoute');
const error404Route = require('../routes/error404Route');

//middlewares
const {globalErrorHandler} = require('../middlewares');



module.exports = function (app) {
    //register middlewares for parse incoming requests
    app.use(express.json());
    app.use(cookieParser());
    app.use(fileUpload());

    //register routes
    app.use('/api/v1/bootcamps', bootcampRoute);
    app.use('/api/v1/courses', courseRoute);
    app.use('/api/v1/users', authRoute);
    app.use('/api/v1/users', userRoute);

    //register route handler for 404 requests
    app.use(error404Route);

    //Catches all errors and handles them
    app.use(globalErrorHandler);
};