import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (user: string): string => {
  const newToken = sign(user, secret);
  return newToken;
};

const xablau = 'xablau';

export { createToken, xablau };
