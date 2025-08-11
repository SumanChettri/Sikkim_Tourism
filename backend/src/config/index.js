const dotenv = require('dotenv')
dotenv.config()

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '5000', 10),
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173'
}

module.exports = { env } 