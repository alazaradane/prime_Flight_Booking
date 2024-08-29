const emailService = require('../services/email-service');

const create = async(req, res)=>{
  try {
    const response = await emailService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data:response,
      err:{},
      message:'successfully registered email reminder'
    })
  } catch (error) {
    return res.status(500).json({
    success: false,
    data:error.message,
    err:error,
    message:"unable to register email reminder"
  })
  }
}

module.exports = {
  create
}