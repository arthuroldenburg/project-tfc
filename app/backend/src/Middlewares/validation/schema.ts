import Joi = require('joi');
import statusCodes from '../../statusCodes';

const LoginVerify = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'All fields must be filled',
});

export const validateLogin = (email: Joi.ValidationOptions, password: Joi.ValidationOptions) => {
  const { error } = LoginVerify.validate({ email, password });
  if (error) return { type: statusCodes.badRequest, message: error };
  return { type: null, message: '' };
};

export const xablau = 'xablau';
