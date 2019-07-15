/**
 * @api {POST} /example/hey POST example
 * @apiName Hey exaple
 * @apiGroup Example
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 *     "example": "Test"
 * }
 * @apiSuccess (200) {String} data Hey.
 * @apiSuccessExample {json} Success-Response:
    { "data": "Hey!" }
 * @apiError (400) {String} msg Error message.
 * @apiErrorExample {json} Error-Response:
    { "data": "example is missing or is not correctly formatted." }
  *
 */

module.exports = (req, res) => {
  return res.status(200).json({
    msg: 'Hey'
  });
};
