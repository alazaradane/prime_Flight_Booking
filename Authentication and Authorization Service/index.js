const express = require('express');
const app = express();
const {PORT} = require('./src/config/serverConfig');
const prepareAndStartServer = ()=>{
  app.listen(PORT,()=>{
    console.log('Server is up and running on PORT:',PORT);
  })
}

prepareAndStartServer();