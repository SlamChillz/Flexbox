const Joi = require('joi');

exports.createSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3),
    email: Joi.string().email({ minDomainSegments: 2}).required(),
    track: Joi.string().min(3)
}).with('firstName', 'email');

exports.updateSchema = Joi.object({
    firstName: Joi.string().min(3).max(30),
    lastName: Joi.string().min(3),
    track: Joi.string().min(3)
});