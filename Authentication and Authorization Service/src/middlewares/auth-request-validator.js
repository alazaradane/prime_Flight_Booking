
const validateUserAuth = (req, res, next)=>{
  if(!req.body.email || !req.body.password){
    return res.status(400).json({
      message: 'Email and password are required',
      data: {},
      success: false,
      err: {}
    })
  }
  next();
}
module.exports = {
  validateUserAuth
}