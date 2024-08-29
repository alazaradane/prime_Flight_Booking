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
    const payload = {
      data:{
        subject: 'This is a notification from queue',
        content: 'some queue will subscribe it.',
        recepientEmail: 'virtualshubham2730@gmail.com',
        notificationTime: '2024-04-28T18:25:00.000'
      },
      service: 'CREATE_TICKET',
      
    }
    publishMessage(channel,REMINDER_BINDING_KEY, JSON.stringify(payload));
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
