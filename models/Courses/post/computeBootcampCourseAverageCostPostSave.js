
const computeBootcampCourseAverageCostPostSave = async function () {
    const Course = this.constructor;
    const bootcampId = this.bootcamp;

        await Course.computeAverageCost(bootcampId);
};

module.exports = computeBootcampCourseAverageCostPostSave;