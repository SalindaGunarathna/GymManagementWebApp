const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // HTTP Status Code 422: Unprocessable Entity
    return res.status(422).json({ error: errors.array()});
  }
  next();
};