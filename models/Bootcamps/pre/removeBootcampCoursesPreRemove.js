const {Course} = require('../../Courses');


const removeBootcampCoursesPreRemove = async function (next) {
    const bootcamp = this;

    await Course.deleteMany({bootcamp: bootcamp._id});

    next();
};

module.exports = removeBootcampCoursesPreRemove;