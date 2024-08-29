const AppErrors = require("./error-handler")
const {statusCodes} = require('http-status-codes')

class ValidationError extends AppErrors{
  constructor(error){
    let errorName= error.name;
    let explanation = [];
    error.errors.forEach((err)=>{
      explanation.push(err.message)
    });
    super(
      errorName,
      "Not able to validate the data sent in the request",
      explanation,
      statusCodes.BAD_REQUEST
    )
  }
}

module.exports = ValidationError;