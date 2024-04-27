const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index');
// const { BookingController } = require('../controllers/index');

const bookingService = new BookingService();


const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    console.log('data in controller', response);
    return res.status(404).json({
      message: 'Booking created successfully',
      success: true,
      err: {},
      data: response
     
    });
   
  } catch (error) {
    console.log('error in controller', error);
    return res.status(500).json({
      message: error,
      success: false,
      err: error.explanation,
      data: {}
    });
    

  }
};

module.exports = {
  create
}
