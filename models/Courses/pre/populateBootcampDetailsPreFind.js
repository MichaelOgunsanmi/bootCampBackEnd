
const populateBootcampDetailsPreFind = function (next) {
    const course = this;

    course.populate({
        path: 'bootcamp',
        select: 'name description'
    });

    next();
};

module.exports = populateBootcampDetailsPreFind;







