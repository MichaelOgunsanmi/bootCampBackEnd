
const courseVirtualRelationship = {
    ref: 'course',
    localField: '_id',
    foreignField: 'bootcamp',
    justOne: false
};


module.exports = courseVirtualRelationship;