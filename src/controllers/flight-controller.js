const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: 'successfully created flight',
      err: {}
    })

  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to create flight',
      err: error
    });
  }
}


const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlightData(req.query);
    return res.status(201).json({
      data: flight,
      success: true,
      message: 'successfully got all flights',
      err: {}
    })
  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to get all flights',
      err: error
    });
  }
}


module.exports = {
  create,
  getAll
}