const mongoose = require('mongoose');

const {exampleStatic} = require('./statics');
const {exampleMethod} = require('./methods');
const {examplePre} = require('./pre');
const {examplePost} = require('./post');
const {validateExample} = require('./utils');

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

courseSchema.statics.exampleStatic = exampleStatic;

courseSchema.methods.exampleMethod = exampleMethod;

courseSchema.pre('examplePre',  examplePre);

courseSchema.post('examplePost',  examplePost);


const Course = mongoose.model('course', courseSchema);


module.exports = {
    Course,
    validateExample
};

