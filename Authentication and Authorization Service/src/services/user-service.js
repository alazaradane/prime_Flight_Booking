const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');


class UserService {
  constructor() {
    this.userRepository = new UserRepository();

  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log('Something went wrong on user service create method');
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
      return result;
    } catch (error) {
      console.log('Something went wrong on user service createToken method');
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log('Something went wrong on user service verifyToken method');
      throw error;
    }
  }


  checkPassword(userInputPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPassword, encryptedPassword);
    } catch (error) {
      console.log('Something went wrong on user service checkPassword method');
      throw error;

    }
  }
}

module.exports = UserService;