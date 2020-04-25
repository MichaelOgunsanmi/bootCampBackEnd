const getSingleBootcampController = require('./getSingleBootcamp');
const getAllBootcampsController = require('./getAllBootcamps');
const getBootcampsWithinController = require('./getBootcampsWithin');
const createBootcampController = require('./createBootcamp');
const updateBootcampController = require('./updateBootcamp');
const deleteBootcampController= require('./deleteBootcamp');



module.exports = {
    getSingleBootcampController,
    getAllBootcampsController,
    getBootcampsWithinController,
    createBootcampController,
    updateBootcampController,
    deleteBootcampController
};