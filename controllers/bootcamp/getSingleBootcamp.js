const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const getSingleBootcamp = asyncWrapper( async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) return next({
        statusCode: 404,
        status: 'fail',
        message: "Bootcamp does not exist"
    });

    res.status(200).json({
        status: 'success',
        data: {
            bootcamp
        }
    });
});

module.exports = getSingleBootcamp;