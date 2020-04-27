const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getAllBootcamps = asyncWrapper( async (req, res, next) => {
    if (req.query.page && req.skip >= await Bootcamp.countDocuments()) return next({
        statusCode: 404,
        status: 'fail',
        message:'This page does not exist'
    });


    const bootcamps = await Bootcamp
        .find(req.queryParams)
        .sort(req.sortBy)
        .select(req.select)
        .skip(req.skip)
        .limit(req.limit)
        .populate('courses');


    res.status(200).json({
        status: 'success',
        results: bootcamps.length,
        data: {
            bootcamps
        }
    });
});

module.exports = getAllBootcamps;