const mongoose = require('mongoose');

const {computeAverageCost} = require('./statics');
const {exampleMethod} = require('./methods');
const {
    populateBootcampDetailsPreFind,
    getCourseDocumentPreRemove,
    getCourseDocumentPreFindOneAndModify
} = require('./pre');
const {
    computeBootcampCourseAverageCostPostSave,
    computeBootcampCourseAverageCostPostFindOneAndModify,
    computeBootcampCourseAverageCostPostRemove
} = require('./post');
const {validateCourse, validateCourseInputsFromUser} = require('./utils');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'A course must have a title']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'A course must have a description']
    },
    weeks: {
        type: String,
        required: [true, 'A course must have its length of weeks specified']
    },
    tuition: {
        type: Number,
        required: [true, 'A course must have a tuition']
    },
    minimumSkillLevel: {
        type: String,
        required: [true, 'A course must require a minimum skill level'],
        enum: [ 'beginner', 'intermediate', 'advanced']
    },
    isScholarshipAvailable: {
        type: Boolean,
        default: false
    },
    bootcamp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bootcamp',
        required: [true, 'A course must belong to a bootcamp']
    }
},
{
    timestamps: true
});


courseSchema.statics = {
    computeAverageCost
};

courseSchema.methods.exampleMethod = exampleMethod;

courseSchema.pre(/^find/, populateBootcampDetailsPreFind);
courseSchema.pre('remove', getCourseDocumentPreRemove);
courseSchema.pre(/^findOneAnd/, getCourseDocumentPreFindOneAndModify);

courseSchema.post('save',  computeBootcampCourseAverageCostPostSave);
courseSchema.post('remove', computeBootcampCourseAverageCostPostRemove);
courseSchema.pre(/^findOneAnd/, computeBootcampCourseAverageCostPostFindOneAndModify);


const Course = mongoose.model('course', courseSchema);


module.exports = {
    Course,
    validateCourse,
    validateCourseInputsFromUser
};

