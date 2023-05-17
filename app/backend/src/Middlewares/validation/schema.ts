// import Joi from 'joi';
import * as Joi from 'joi';
import statusCodes from '../../statusCodes';

const fieldsFilled = 'All fields must be filled';

const LoginVerify = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const validateLogin = (email: Joi.ValidationOptions, password: Joi.ValidationOptions) => {
  const { error } = LoginVerify.validate({ email, password });
  if (error) return { type: statusCodes.badRequest, message: fieldsFilled };
  return { type: null, message: '' };
};

export const xablau = 'xablau';
