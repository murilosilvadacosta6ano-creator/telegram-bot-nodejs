const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({ level: 'info' }), // Log to console at info level
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log to file at error level
    new winston.transports.File({ filename: 'combined.log' }) // Log all levels to this file
  ]
});

module.exports = logger;
