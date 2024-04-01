
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
  async deleteCity({ cityId }) {
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
  async updateCity(cityId, data){
    try {
      const city = await City.update(data, {
        where: {
          id: cityId
        }
      });
      
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
    }
  }

  //get city
  async getCity(cityId){
    try {
      const city = await City.findByPk(cityId)
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
    }

  }


}

module.exports = CityRepository;