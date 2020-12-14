import jwt from 'jsonwebtoken';

export const encodeJwt = (payload) => jwt.sign(payload, process.env.JWT_KEY);

export const decodeJwt = (token) => jwt.verify(token, process.env.JWT_KEY);
