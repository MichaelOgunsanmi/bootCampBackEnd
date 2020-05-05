const mongoose = require('mongoose');

const {
    findByEmail,
    findByCredentials
} = require('./statics');

const {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter,
    generatePasswordResetToken
} = require('./methods');

const {
    hashPasswordPreSave,
    setPasswordChangeDatePreSave,
    findOnlyActiveUsersPreSave
} = require('./pre');

const {examplePost} = require('./post');

const {
    validateUser,
    validateUserInputsFromUser
} = require('./utils');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field cannot be empty'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Invalid email']
    },
    role: {
        type: String,
        enum: ['user', 'publisher'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        minlength: 6,
        select: false
    },
    passwordResetToken: String,
    passwordResetExpiresAt: Date,
}, {
    timestamps: true
});

userSchema.statics = {
    findByEmail,
    findByCredentials
};

userSchema.methods = {
    toJSON,
    generateAuthToken,
    passwordWasChangedAfter,
    generatePasswordResetToken
};

userSchema.pre(/^find/,  findOnlyActiveUsersPreSave);
userSchema.pre('save',  setPasswordChangeDatePreSave);
userSchema.pre('save',  hashPasswordPreSave);



userSchema.post('examplePost',  examplePost);


const User = mongoose.model('user', userSchema);

module.exports = {
    User,
    validateUser,
    validateUserInputsFromUser
};

