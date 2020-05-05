const express = require('express');
const router = express.Router();

const {
    validateUserRequestBody,
    doesUserExist,
} = require('../middlewares');


const {
    signUpController,
    loginController,
    logoutController,
    forgotPasswordController,
    resetPasswordController,
} = require('../controllers/auth');



router.post('/signup', signUpController);
router.post('/login', validateUserRequestBody, loginController);
router.get('/logout', logoutController);
router.post('/forgotPassword', validateUserRequestBody, doesUserExist, forgotPasswordController);
router.patch('/resetPassword/:token', validateUserRequestBody, resetPasswordController);
