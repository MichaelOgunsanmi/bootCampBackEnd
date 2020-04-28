
const getCourseDocumentPreFindOneAndModify = async function (next) {
    this.course = await this.findOne();


    if (!this.course) return next({
        statusCode: 404,
        status: 'fail',
        message: "Course does not exist"
    });

    next();
};

module.exports = getCourseDocumentPreFindOneAndModify;



