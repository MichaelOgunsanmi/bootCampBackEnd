const Joi = require('@hapi/joi');
const JoiObjectId = require('joi-objectid')(Joi);


const validateCourse = (course) => {
    const schema = Joi.object().keys({
        title: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(2).max(500).required(),
        weeks: Joi.string().required(),
        tuition: Joi.number().required(),
        minimumSkillLevel: Joi.string().pattern(/beginner|intermediate|advanced/).required(),
        isScholarshipAvailable: Joi.boolean(),
        bootcamp: JoiObjectId().required()
    });

    return schema.validate(course);
};

module.exports = validateCourse;