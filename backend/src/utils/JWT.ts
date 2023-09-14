import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type Payload = {
  email: string;
};

export default class JWT {
  static sign (payload: Payload) {
    return jwt.sign(payload, secret, { expiresIn: '1d' });
  }

  static verify (token: string) {
    return jwt.verify(token, secret) as Payload;
  }
};