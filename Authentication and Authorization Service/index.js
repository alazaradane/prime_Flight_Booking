const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./src/config/serverConfig');
const apiRoutes = require('./src/routes/index');
const prepareAndStartServer = ()=>{

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use('/api',apiRoutes);
  app.listen(PORT,()=>{
    console.log('Server is up and running on PORT:',PORT);
  })
}

prepareAndStartServer();