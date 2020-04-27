const {Course} = require('../../models/Courses');

const asyncWrapper = require('../asyncWrapper');


const doesCourseExist = asyncWrapper(async (req, res, next) => {
    const courseId = req.params.id;

    const findCourse = await Course.findById(courseId);

    if (!findCourse) return next({
        statusCode: 404,
        status: 'fail',
        message: "Course doesn't exist"
    });

    req.course = findCourse;

    next();
});

module.exports = doesCourseExist;