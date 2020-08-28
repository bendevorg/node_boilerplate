/**
 * @api {GET} /example/hi GET Example
 * @apiName Hi example
 * @apiGroup example
 * @apiVersion 0.0.1
 * 
 * @apiSuccess (200) {String} data Hi.
 * @apiSuccessExample {json} Success-Response:
    { "data": "Hi!" }
  *
 */

import { Request, Response } from 'express';

export default (_req: Request, res: Response) => {
  return res.status(200).json({
    msg: 'Hi!',
  });
};
