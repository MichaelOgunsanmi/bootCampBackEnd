const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../asyncWrapper');


const doesBootcampExist = asyncWrapper(async (req, res, next) => {
    const bootcampId = req.params.id || req.params.bootcampId || req.body.bootcamp;

    const findBootcamp = await Bootcamp.findById(bootcampId);

    if (!findBootcamp) return next({
        statusCode: 404,
        status: 'fail',
        message: "Bootcamp doesn't exist"
    });

    req.bootcamp = findBootcamp;

    next();
});

module.exports = doesBootcampExist;