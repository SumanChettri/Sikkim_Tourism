const { env } = require('../config')

function errorHandler(err, req, res, next) {
  const status = err.status || 500
  const payload = {
    message: err.message || 'Internal Server Error'
  }
  if (env.NODE_ENV !== 'production') {
    payload.stack = err.stack
  }
  res.status(status).json(payload)
}

module.exports = { errorHandler } 