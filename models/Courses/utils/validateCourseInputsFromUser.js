const Joi = require('@hapi/joi');
const JoiObjectId = require('joi-objectid')(Joi);


const validateCourseInputsFromUser = (course) => {
    const schema = Joi.object().keys({
        title: Joi.string().min(2).max(50),
        description: Joi.string().min(2).max(500),
        weeks: Joi.string(),
        tuition: Joi.number(),
        minimumSkillLevel: Joi.string().pattern(/beginner|intermediate|advanced/),
        isScholarshipAvailable: Joi.boolean(),
        bootcamp: JoiObjectId().required()
    });

    return schema.validate(course);
};

module.exports = validateCourseInputsFromUser;