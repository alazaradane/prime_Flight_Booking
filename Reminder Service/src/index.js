const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config')
const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

  })
  // sendBasicEmail(
  //   'virtualshubham2730@gmail.com',
  //   'virtualshubham2730@gmail.com',
  //   'this is testing email',
  //   'hey this is the testing email from the reminder service'
  // )

}

setupAndStartServer();