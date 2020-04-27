const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');



const deleteBootcamp = asyncWrapper( async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) return next({
        statusCode: 404,
        status: 'fail',
        message: "Bootcamp does not exist"
    });

    await bootcamp.remove();


    res.status(204).send();
});

module.exports = deleteBootcamp;