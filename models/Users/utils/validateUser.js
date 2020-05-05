const Joi = require('@hapi/joi');

const validateUser = (user) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).required(),
        role: Joi.string().pattern(/^admin$|^user$|/),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/).required(),
        passwordResetToken: Joi.string(),
        passwordResetExpiresAt: Joi.date()
    });

    return schema.validate(user);
};

module.exports = validateUser;