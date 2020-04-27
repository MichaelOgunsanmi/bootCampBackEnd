const {Course} = require('../../models/Courses');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllCourses = asyncWrapper( async (req, res, next) => {
    let filter = {...req.queryParams};

    if (req.params.bootcampId) filter = { ...filter, bootcamp: req.params.bootcampId};

    if (req.query.page && req.skip >= await Course.countDocuments()) return next({
        statusCode: 404,
        status: 'fail',
        message:'This page does not exist'
    });


    const courses = await Course
        .find(filter)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit);


    res.status(200).json({
        status: 'success',
        results: courses.length,
        data: {
            courses
        }
    });
});

module.exports = getAllCourses;