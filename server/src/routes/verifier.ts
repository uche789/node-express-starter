import {Request, Response, NextFunction} from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const code = req.query.code;
  if (code === 'abc' || code === '123') {
    res.status(200).send({ msg: 'Code is valid' });
  } else {
    res.status(404).json({ msg: 'Invalid code mmm' });
  }

  next();
}