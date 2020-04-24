const slugify = require('slugify');

const {Bootcamp, validateBootcampInputsFromUser} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const updateBootcamp = asyncWrapper(async (req, res, next) => {
    const {error} = validateBootcampInputsFromUser(req.body);

    if (error) return next({
        statusCode: 400,
        status: 'fail',
        message: process.env.NODE_ENV === 'production' ? 'Invalid details provided' : error.toString()
    });

    if (req.body.name) req.body.slug = slugify(req.body.name, { lower: true });

    const doesUpdateNameExists = await Bootcamp.find({slug: req.body.slug});

    if (doesUpdateNameExists.length > 0) return next({
        statusCode: 400,
        status: 'fail',
        message: "Name already exist"
    });


    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: 'success',
        data: {
            bootcamp
        }
    });
});

module.exports = updateBootcamp;