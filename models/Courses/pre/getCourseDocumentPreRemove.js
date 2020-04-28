
const getCourseDocumentPreRemove = function(next) {
    this.course = this;

    next();
};


module.exports = getCourseDocumentPreRemove;