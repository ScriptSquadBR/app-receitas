import { Request, Response, NextFunction } from 'express';
import JWT from '../utils/JWT';

export default class Token {
  static validate (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const token = authorization.replace('Bearer', '').trim();
      const payload = JWT.verify(token);

      req.body.user = payload;

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  }
}