const joi = require('joi');

const schema = joi.object().keys({
  example: joi.string().required(),
});

module.exports = (req, res, next) => {
  joi.validate(req.body, schema, err => {
    if (!err) {
      return next();
    }
    return next(err);
  });
};
