
const db = require('../models/index');
const City = db.city;

class CityRepository {
  //create city
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log('something went wrong ');
      throw { error };

    }
  }

  //delete city
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId
        }
      })
      return true;
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
    }
  }

  //update city
  async updateCity(data, cityId) {
    try {
      //  below approach is not returning the updated object.
      const city = await City.update(data, {
        where: {
          id: cityId
        }
      });
      return city;

      // const city = await City.findByPk(cityId);
      // city.name = data.name;
      // await city.save();
      // return city;

    } catch (error) {
      console.log('something went wrong ');
      throw { error };
    }
  }

  //get city
  async getCity({ cityId }) {
    try {
      const city = await City.findByPk(cityId)
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
    }

  }

  //get all cities
  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log('something went wrong ', error.message);
      throw { error };
    }
  }


}

module.exports = CityRepository;