const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const cityRepository = require('./repository/city-repository');




// Setup and start the server
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
    const repo = new cityRepository();
    repo.createCity({name:'new delhi'})
    .catch((error)=>{
      console.log(error);
    });
  });
}
setupAndStartServer();




