const {User, validateUser} = require('../../models/Users');
const {setJWTCookie} = require('../../cookies');
// const {sendWelcomeEmail} = require('../../emails');
const asyncWrapper = require('../../middlewares/asyncWrapper');

const signUp = asyncWrapper(async (req, res, next) => {
    const {error} = validateUser(req.body);

    if (error) return next({
        statusCode: 400,
        status: "fail",
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const findUser = await User.findOne({email: req.body.email});

    if (findUser) return next({
        statusCode: 400,
        status: 'fail',
        message: 'User already created'
    });

    const newUser = new User(req.body);

    const token = newUser.generateAuthToken();

    setJWTCookie(token, req, res);

    const createdUser = await newUser.save();

    // await sendWelcomeEmail(createdUser, createdUserProfileUrl);

    res.status(201).json({
        status: "success",
        token,
        data: {
            user: createdUser
        }
    });
});

module.exports = signUp;