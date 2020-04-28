
const computeBootcampCourseAverageCostPostRemove = async function () {
    const Course = this.course.constructor;
    const bootcampId = this.course.bootcamp._id;

    await Course.computeAverageCost(bootcampId);
};

module.exports = computeBootcampCourseAverageCostPostRemove;