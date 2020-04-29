const getSingleBootcampController = require('./getSingleBootcamp');
const getAllBootcampsController = require('./getAllBootcamps');
const createBootcampController = require('./createBootcamp');
const updateBootcampController = require('./updateBootcamp');
const deleteBootcampController= require('./deleteBootcamp');


const getBootcampsWithinController = require('./getBootcampsWithin');
const uploadBootcampPhotoController = require('./uploadBootcampPhoto');


module.exports = {
    getSingleBootcampController,
    getAllBootcampsController,
    createBootcampController,
    updateBootcampController,
    deleteBootcampController,
    getBootcampsWithinController,
    uploadBootcampPhotoController
};