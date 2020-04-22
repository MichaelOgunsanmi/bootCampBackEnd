const mongoose = require('mongoose');

const {exampleStatic} = require('./statics');
const {exampleMethod} = require('./methods');
const {examplePre} = require('./pre');
const {examplePost} = require('./post');
const {validateExample} = require('./utils');

const bootcampSchema = new mongoose.Schema({

},
{
    timestamps: true
});

bootcampSchema.statics.exampleStatic = exampleStatic;

bootcampSchema.methods.exampleMethod = exampleMethod;

bootcampSchema.pre('examplePre',  examplePre);

bootcampSchema.post('examplePost',  examplePost);


const Bootcamp = mongoose.model('bootcamp', bootcampSchema);


module.exports = {
    Bootcamp,
    validateExample
};

