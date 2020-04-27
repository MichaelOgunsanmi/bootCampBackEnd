const {Course, validateCourseInputsFromUser} = require('../../models/Courses');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const updateCourse = asyncWrapper(async (req, res, next) => {
    req.body.bootcamp = req.body.bootcamp || req.params.bootcampId;

    if (req.body.bootcamp.toString() !== req.course.bootcamp._id.toString()) return next({
        statusCode: 400,
        status: 'fail',
        message: 'Invalid details provided'
    });

    const {error} = validateCourseInputsFromUser(req.body);

    if (error) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });


    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: 'success',
        data: {
            course
        }
    });
});

module.exports = updateCourse;