const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "./src/logs/combined.log" }),
  ],
});

module.exports = logger;
