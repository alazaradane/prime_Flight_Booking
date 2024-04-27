const { Flights } = require('../models/index');
const { Op } = require('sequelize')

class FlightRepository {

  //private member function:
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    // if(data.minPrice){
    //   Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
    //   //Object.assign is used to merge two objects
    //   //gte: greater than or equal to
    // }
    // if(data.maxPrice){
    //   Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
    //   //lte: less than or equal to
    // }
    //! Above approach can use either min price or max price but not both, so we will use below approach with either between or and operator.

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } }
    //     ]
    //   })
    // }

    //! Above approach is good when both the prices are passed but when only one price is passed then it is consuming more time to check both the conditions, so we will use below approach.

    //using arrays: 
    let priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });


    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log('Something went wrong in flight repository createFlight method');
      throw error;
    }
  }


  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log('Something went wrong in flight repository getFlight method');
    }
  }


  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll(
        {
          where: filterObject
        }
      );
      return flights;

    } catch (error) {
      console.log('Something went wrong in flight repository getAllFlight method');
    }
  }

  async updateFlight(flightId, data){
    try {
      await Flights.update(data, {
        where: {
          id: flightId
        }
      });
      return true;
    } catch (error) {
      console.log('Something went wrong in flight repository updateFlight method');
      throw error;
    }
  }




}

module.exports = FlightRepository;