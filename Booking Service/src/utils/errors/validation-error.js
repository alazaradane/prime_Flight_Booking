const express = require('express');
const { StatusCodes } = require('http-status-codes');

class validationError extends Error{
  constructor(error){
    super();
    //super() calls the constructor of the parent(error) class.
    let explanation = [];
    error.errors.forEach((err)=>{
      explanation.push(err.message);
    });
    this.name = 'ValidationError';
    this.message = 'Not able to validate data sent in the request';
    this.explanation = explanation;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
  
}