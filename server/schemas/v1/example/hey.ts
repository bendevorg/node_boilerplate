import joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = joi.object().keys({
  example: joi.string().required(),
});

export default (req: Request, _res: Response, next: NextFunction) => {
  const { error }: joi.ValidationResult = schema.validate(req.body);
  if (!error) {
    return next();
  }
  return next(error);
};
