const {Course} = require('../../models/Courses');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const deleteCourse = asyncWrapper( async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    if (!course) return next({
        statusCode: 404,
        status: 'fail',
        message: "Course does not exist"
    });

    await course.remove();


    res.status(204).send();
});

module.exports = deleteCourse;