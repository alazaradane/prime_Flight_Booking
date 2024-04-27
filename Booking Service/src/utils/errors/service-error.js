const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
  constructor(
    message = 'Something went wrong',
    explanation,
    statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message)
    this.name= 'ServiceError';
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCodes;
  }
}

module.exports = ServiceError;