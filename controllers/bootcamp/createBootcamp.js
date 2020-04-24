const {Bootcamp, validateBootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const createBootcamp = asyncWrapper( async (req, res, next) => {
    const {error} = validateBootcamp(req.body);

    if (error) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    const findBootcamp = await Bootcamp.findOne({name: req.body.name});

    if (findBootcamp) return next({
        statusCode: 400,
        status: 'fail',
        message: 'Bootcamp already created'
    });

    const newBootcamp = new Bootcamp(req.body);

    const createdBootcamp = await newBootcamp.save();

    res.status(201).json({
        status: 201,
        data: {
            bootcamp: createdBootcamp
        }
    });
});

module.exports = createBootcamp;