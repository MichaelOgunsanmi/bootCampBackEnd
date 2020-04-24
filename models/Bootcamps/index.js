const mongoose = require('mongoose');

const {exampleStatic} = require('./statics');
const {exampleMethod} = require('./methods');
const {examplePre} = require('./pre');
const {examplePost} = require('./post');
const {validateBootcamp} = require('./utils');

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A bootcamp must have a name'],
        unique: true,
        minLength: [2, 'A bootcamp name cannot be less than 2 characters'],
        maxLength: [50, 'A bootcamp name cannot exceed 50 characters'],
        trim: true
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'A bootcamp must have a description'],
        minLength: [2, 'A bootcamp description cannot be less than 2 characters'],
        maxLength: [500, 'A bootcamp description cannot exceed 500 characters'],
        trim: true
    },
    website: {
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
            'Valid URLs with HTTP or HTTPS allowed']
    },
    phone: {
        type: String,
        maxLength: [20, 'Phone number cannot exceed 20 characters']
    },
    email: {
        type: String,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Invalid email']
    },
    address: {
        type: String,
        required: [true, 'A bootcamp must have an address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers: {
        type: [String],
        required: [true, 'A bootcamp must be linked to a career field'],
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Average Rating cannot be less than 1'],
        max: [10, 'Average Rating must cannot exceed 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    }
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
    validateBootcamp
};

