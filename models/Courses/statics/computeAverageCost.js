

const computeAverageCost = async function (bootcampId) {
    const {Bootcamp} = require('../../Bootcamps');
    const Course = this;

    const bootcampCourseAverageCost = await Course.aggregate([
        {
            $match : {bootcamp: bootcampId}
        },
        {
            $group : {
                _id : '$bootcamp',
                averageCost: { $avg: '$tuition' }
            }
        }
    ]);

    let averageCost = 0;

    if (bootcampCourseAverageCost.length > 0) averageCost = bootcampCourseAverageCost[0].averageCost;

    await Bootcamp.findByIdAndUpdate(bootcampId, {averageCost});

};

module.exports = computeAverageCost;