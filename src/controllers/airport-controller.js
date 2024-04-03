const{ AirportService }= require('../services/index');
const airportService = new AirportService();
const create = async (req, res)=>{
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: 'successfully created airport',
      err: {}
    })
  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to create airport',
      err: error
    });
  }
}
module.exports = {
  create
}