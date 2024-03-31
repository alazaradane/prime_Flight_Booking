const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');



// Setup and start the server
const setupAndStartServer = async()=>{
  const app = express();
  // Add body parser middleware: this will allow us to access the request body in our routes
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  });
}
setupAndStartServer();

