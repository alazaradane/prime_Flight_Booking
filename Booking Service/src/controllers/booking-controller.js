const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index');
// const { BookingController } = require('../controllers/index');

const { createChannel , publishMessage} = require('../utils/messageQueue');
const {REMINDER_BINDING_KEY} = require('../config/server-config');

const bookingService = new BookingService();

class BookingController {

  constructor(){

  } 

  async sendMessageToQueue(req, res){
    const channel = await createChannel();
    publishMessage(channel,REMINDER_BINDING_KEY, JSON.stringify(req.body));
    return res.status(200).json({
      message:'successfully published the event'
    });
  }

  async create(req, res)  {
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
  }

}


module.exports = BookingController;
