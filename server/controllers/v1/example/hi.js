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

module.exports = (req, res) => {
  return res.status(200).json({
    msg: 'Hi!'
  });
};
