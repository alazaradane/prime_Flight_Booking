const {User} = require('../models/index');

class UserRepository{

  async create(data){
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
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



}

module.exports = UserRepository;