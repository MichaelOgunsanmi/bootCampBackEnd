const express = require('express');
const router = express.Router();

const {
    authenticateUser,
    authorizeUser,
    validateUserRequestBody,
    uploadUserPhoto,
    resizeUserPhoto,
    getCurrentUser,
    filterRequestQueryObject
} = require('../middlewares');


const {
    getSingleUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController,
    adminDeleteUserController
} = require('../controllers/user');


router.use(authenticateUser);

router.get('/me', getCurrentUser, getSingleUserController);
router.patch('/updateMe', uploadUserPhoto, resizeUserPhoto, validateUserRequestBody, updateUserController);
router.delete('/deleteMe', deleteUserController);

router.use(authorizeUser('admin'));

router
    .route('/:id')
    .get(getSingleUserController)
    .delete(adminDeleteUserController);

router
    .route('/')
    .get(filterRequestQueryObject, getAllUsersController);



module.exports = router;