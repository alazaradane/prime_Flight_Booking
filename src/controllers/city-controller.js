const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async(req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data:city,
      success: true,
      message: 'successfully created city',
      err:{}
    })
  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data:{},
      success: false,
      message: 'failed to create city',
      err: error
    });

  }
}

const destroy = async(req, res) => {
  try {

  } catch (error) {
    console.log('something went wrong ', error);

  }
}

const get =async (req, res) => {
  try {

  } catch (error) {
    console.log('something went wrong ', error);

  }
}


const update = async(req, res) => {
  try {

  } catch (error) {
    console.log('something went wrong ', error);

  }
}

module.exports = {
  create,
  destroy,
  get,
  update
}