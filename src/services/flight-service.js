const { FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService{
  constructor(){
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  // Create a new flight 
  async createFlight(data){
    try {
      if(!compareTime(data.arrivalTime, data.departureTime)){
        throw {
          error: 'arrival time should be greater than departure time'
        }
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data, totalSeats:airplane.capacity
      });
      return flight;

    } catch (error) {
      console.log('Something went wrong in flight service createFlight method');
      throw error;
      
    }
  }

  async getAllFlightData(data){
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log('Something went wrong in flight service getAllFlightData method');
      throw error;
    }
  }





  async getFlightData(){
    //todo
  }





}

module.exports = FlightService;

/*
{
  flightNumber,
  airplaneId,
  departureAirportId,
  arrivalAirportId,
  arrivalTime,
  departureTime,
  price,
  totalSeats->airplane
  boardingGate
}

*/