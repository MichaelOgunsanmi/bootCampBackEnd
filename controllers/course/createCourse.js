const {Course, validateCourse} = require('../../models/Courses');
const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const createCourse = asyncWrapper( async (req, res, next) => {
    if (!req.body.bootcamp) req.body.bootcamp = req.params.bootcampId;

    const {error} = validateCourse(req.body);

    if (error) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const newCourse = new Course(req.body);

    const createdCourse = await newCourse.save();

    res.status(201).json({
        status: 201,
        data: {
            course: createdCourse
        }
    });
});

module.exports = createCourse;