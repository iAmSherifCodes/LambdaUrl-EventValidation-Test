const Joi = require('joi');

const schemaValidation = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().pattern(new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")).required(),
    phone: Joi.string().optional()
})

module.exports = {schemaValidation};
