const {Course} = require('../../models/Courses');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getSingleCourse = asyncWrapper( async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    if (!course) return next({
        statusCode: 404,
        status: 'fail',
        message: "Course does not exist"
    });

    res.status(200).json({
        status: 'success',
        data: {
            course
        }
    });
});

module.exports = getSingleCourse;