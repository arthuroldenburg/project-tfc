import { verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const decodeToken = (token: any) => verify(token, secret);

export default decodeToken;
