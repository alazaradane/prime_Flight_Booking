const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const { Airport, city } = require('./models/index');



// Setup and start the server
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', ApiRoutes);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  if (process.env.SYNC_DB) {
    db.sequelize.sync({ alter: true });
  }



}
setupAndStartServer();



