const Joi = require('@hapi/joi');


const validateBootcampInputsFromUser = (bootcamp) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).max(50),
        description: Joi.string().min(2).max(500),
        website: Joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/),
        phone: Joi.string().max(20),
        email: Joi.string().pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        address: Joi.string(),
        location: Joi.object().keys({
            type: Joi.string(),
            coordinates: Joi.array().items(Joi.number()),
            formattedAddress: Joi.string(),
            street: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zipcode: Joi.string(),
            country: Joi.string()
        }),
        careers: Joi.array().items(Joi.string().required()),
        averageRating: Joi.number().min(1).max(10),
        averageCost: Joi.number(),
        photo: Joi.string(),
        housing: Joi.boolean(),
        jobAssistance: Joi.boolean(),
        jobGuarantee: Joi.boolean(),
        acceptGi: Joi.boolean()
    });

    return schema.validate(bootcamp);
};

module.exports = validateBootcampInputsFromUser;