const {geocoder} = require('../../../utils');



const createLocationFieldFromAddressPreSave = async function (next) {
    const bootcamp = this;

    const bootcampLocation = await geocoder.geocode(bootcamp.address);
    const {
        longitude,
        latitude,
        formattedAddress,
        streetName: street,
        city,
        stateCode: state,
        zipcode,
        countryCode: country
    } = bootcampLocation[0];


    bootcamp.location = {
        type: 'Point',
        coordinates: [longitude, latitude],
        formattedAddress,
        street,
        city,
        state,
        zipcode,
        country
    };

    bootcamp.address = undefined;

    next();
};

module.exports = createLocationFieldFromAddressPreSave;