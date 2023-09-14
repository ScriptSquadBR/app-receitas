import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

export default class Validate {
  static email(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    next();
  }

  static password(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    if (!validator.isLength(password, { min: 6 })) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    next();
  }

  static username(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    if (!validator.isLength(name, { min: 3 })) {
      return res.status(400).json({ message: 'Invalid name' });
    }

    next();
  }
}