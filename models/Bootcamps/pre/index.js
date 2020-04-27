const slugifyBootcampNamePreSave = require('./slugifyBootcampNamePreSave');
const createLocationFieldFromAddressPreSave = require('./createLocationFieldFromAddressPreSave');
const removeBootcampCoursesPreRemove = require('./removeBootcampCoursesPreRemove');


module.exports = {
    slugifyBootcampNamePreSave,
    createLocationFieldFromAddressPreSave,
    removeBootcampCoursesPreRemove
};