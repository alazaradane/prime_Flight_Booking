const {User} = require('../models/index');
const ValidationError = require('../utils/error-handler');

class UserRepository{

  async create(data){
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if(error.name === 'SequelizeValidationError'){
        throw  new ValidationError(error);
      }
     
      console.log('Something went wrong on user repository create method');
      throw error;
    }
  }

  async destroy(userId){
    try {
      await User.destroy({
        where: {
          id: userId
        }
      })
      return true;
    } catch (error) {
      console.log('Something went wrong on user repository destroy method');
      throw error;
    }
  }

  async getById(userId){
    try {
      const user = await User.findByPk(userId, {
        attributes: ['email',  'id']
      });
      return user;
      
    } catch (error) {
      console.log('Something went wrong on user repository getById method');
      throw error;
    }
  }

  async getByEmail(userEmail){
    try {
      const user = await User.findOne({
        where: {
          email: userEmail
        }
      })
      return user;
    } catch (error) {
      console.log('Something went wrong on user service getByEmail method');
      throw error;
    }
  }

  
  async isAdmin(userId){
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: 'ADMIN'
        }
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log('Something went wrong on user repository isAdmin method');
      throw error;
    }
  }

}

module.exports = UserRepository;