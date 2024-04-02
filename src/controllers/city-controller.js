const { CityService } = require('../services/index');

const cityService = new CityService();


//create city
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'successfully created city',
      err: {}
    })
  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to create city',
      err: error
    });

  }
}

//delete city
const destroy = async (req, res) => {
  try {
    const city = await cityService.deleteCity({ cityId: req.params.id });
    return res.status(201).json({
      data: city,
      success: true,
      message: 'successfully deleted city',
      err: {}
    })

  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to delete city',
      err: error
    });

  }
}

//get city by id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity({cityId: req.params.id });
    return res.status(201).json({
      data: city,
      success: true,
      message: 'successfully fetched city',
      err: {}
    })

  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to fetch city',
      err: error
    });

  }
}

//update city
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.body, req.params.id );
   
    return res.status(201).json({
      data: city,
      success: true,
      message: 'successfully updated city',
      err: {}
    })
  } catch (error) {
    console.log('something went wrong ', error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'failed to update city',
      err: error
    });

  }
}

module.exports = {
  create,
  destroy,
  get,
  update
}