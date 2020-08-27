import {Request, Response, NextFunction} from 'express';
import appData from '../services/application';

export default (req: Request, res: Response, next: NextFunction) => {
  appData.fetch().then((data: any) => {
    res.json(data);
  });
}