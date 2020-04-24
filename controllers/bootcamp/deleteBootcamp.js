const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const deleteBootcamp = asyncWrapper( async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) return next({
        statusCode: 404,
        status: 'fail',
        message: "Bootcamp does not exist"
    });


    res.status(204).send();
});

module.exports = deleteBootcamp;