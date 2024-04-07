const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');


const prepareAndStartServer = async () => {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', apiRoutes);
  app.listen(PORT, () => {
    console.log('Server is up and running on PORT:', PORT);
  });
  if (process.env.dB_SYNC) {
    db.sequelize.sync({ alter: true })
  }
}

prepareAndStartServer();