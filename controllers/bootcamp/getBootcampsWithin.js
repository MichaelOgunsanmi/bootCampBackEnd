const {Bootcamp} = require('../../models/Bootcamps');
const {EARTHRADIUSINMILES, geocoder} = require('../../utils');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const getBootcampsWithin = asyncWrapper( async (req, res, next) => {
    const {radius, zipcode} = req.params;

    const userLocation = await geocoder.geocode(zipcode);

    const {latitude, longitude} = userLocation[0];

    if (!longitude || !latitude) return next({
        statusCode: 400,
        status: 'fail',
        message: "Please provide a valid zipcode"
    });

    const radiusInRadians = radius / EARTHRADIUSINMILES;

    const bootcamps = await Bootcamp.find({
        location:
            {
                $geoWithin: { $centerSphere: [ [ longitude, latitude ], radiusInRadians ] }
            }
    });

    res.status(200).json({
        status: 'success',
        results: bootcamps.length,
        data: {
            bootcamps
        }
    });
});

module.exports = getBootcampsWithin;