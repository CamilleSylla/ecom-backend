//Validation
const Joi = require('@hapi/joi');

//register validation
const registerValidation = data => {
    const schema = Joi.object({
        last_name: Joi.string().min(3).required(),
        first_name: Joi.string().min(6).required(),
        adresse: Joi.string().min(6).required(),
        city: Joi.string().min(6).required(),
        gender: Joi.string().min(2),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data);
};
//login validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;