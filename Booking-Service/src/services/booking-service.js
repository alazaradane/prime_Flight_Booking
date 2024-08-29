const { BookingRepository} = require('../repository/index');
const axios = require('axios');
const {FLIGHT_SERVICE_PATH} = require('../config/server-config');
const { ServiceError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

class BookingService{
  constructor(){
    this.BookingRepository = new BookingRepository();
  }

  async createBooking(data){
    try {
      const flightId = data.flightId;
      let getFlightRequestUrl =  `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`
      const response = await axios.get(getFlightRequestUrl);
      const flightData = response.data.data;
      let priceOfFlight = flightData.price
      if(data.noOfSeats>flightData.totalSeats){
        throw new ServiceError('Something went wrong in the booking process', 'Insufficient seats in the flight');
      }
      const totalCost = priceOfFlight * data.noOfSeats;
      const bookingPayload = {...data, totalCost};
      const booking = await this.BookingRepository.create(bookingPayload);
      const updateFlightRequestUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
      await axios.patch(updateFlightRequestUrl, {totalSeats: flightData.totalSeats - booking.noOfSeats});
      const finalBooking = await this.BookingRepository.update(booking.id, {status: 'booked'})
      return finalBooking;

     
    } catch (error) {
      //console.log("error in service layer", error)
      if(error.name == "RepositoryError" || error.name == 'Validation Error'){
        throw error;
      }
      throw new ServiceError('Booking could not be created', 'The booking could not be created due to...', StatusCodes.BAD_REQUEST);
    }
  }
}

module.exports = BookingService;