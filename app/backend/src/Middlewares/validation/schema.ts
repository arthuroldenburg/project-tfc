import * as Joi from 'joi';
import statusCodes from '../../statusCodes';

const fieldsFilled = 'All fields must be filled';

const LoginVerify = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const passLength = '"password" length must be at least 6 characters long';
const validEmail = '"email" must be a valid email';
const erro = { type: statusCodes.unauthorized, message: 'Invalid email or password' };

export const validateLogin = (email: Joi.ValidationOptions, password: Joi.ValidationOptions) => {
  const { error } = LoginVerify.validate({ email, password });
  if (error && error.message === validEmail) return erro;
  if (error && error.message === passLength) return erro;
  if (error) return { type: statusCodes.badRequest, message: fieldsFilled };
  return { type: null, message: '' };
};

export const xablau = 'xablau';
