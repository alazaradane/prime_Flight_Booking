const {CityRepository} = require('../repository/index');

class CityService{
  constructor(){
    this.cityRepository = new CityRepository();
  }
  async createCity(data){
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
      
    }
  }

  async deleteCity({cityId}){
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
      
    }
  }

  async updateCity(data, cityId){
    try {
      const city  = await this.cityRepository.updateCity( data, cityId); 
      return city;
      
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
      
    }
  }

async getCity({cityId}){
    try {
      const city  = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log('something went wrong ');
      throw { error };
      
    }
  }
}

module.exports = CityService;