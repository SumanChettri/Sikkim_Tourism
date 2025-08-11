// Usage: validate(schema) to validate req.body
module.exports = function validate(schema) {
  return function(req, res, next) {
    if (!schema) return next()
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    })
    if (error) {
      const err = new Error('Validation failed')
      err.status = 400
      err.details = error.details
      return next(err)
    }
    req.body = value
    next()
  }
} 