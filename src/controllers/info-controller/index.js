const { StatusCodes } = require("http-status-codes");

function info(req, res) {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "info",
    error: {},
    data: {},
  });
}

module.exports = { info };
