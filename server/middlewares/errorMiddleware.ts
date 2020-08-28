/**
 * Module to handle errors
 * @module middlewares/errorMiddleware
 */

/**
 * Handle all errors in our app. Must call next(err) on a controller to be used
 *
 */

import { Request, Response, NextFunction } from 'express';
import { errors, messages } from '../constants';

// eslint-disable-next-line
export default (
  err: Error | any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  switch (err.name) {
    case errors.name.VALIDATION_ERROR:
      return res.status(400).json({
        data: err.details[0].message,
      });
    default:
      return res.status(500).json({
        data: messages.error.UNEXPECTED_RUNNING,
      });
  }
};
