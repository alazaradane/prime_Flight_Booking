const {Flights} = require('../models/index');

class FlightRepository{
  async createFlight(data){
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log('Something went wrong in flight repository createFlight method');
      throw error;      
    }
  }
}

module.exports =  FlightRepository;