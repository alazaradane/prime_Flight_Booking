const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config')
const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/jobs');
const TicketController = require('./controllers/ticket-controller');
const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/server-config');
const EmailService = require('./services/email-service');

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // const channel = await createChannel();

  app.post('/api/v1/tickets', TicketController.create);

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

  })
  // sendBasicEmail(
  //   'virtualshubham2730@gmail.com',
  //   'virtualshubham2730@gmail.com',
  //   'this is testing email',
  //   'hey this is the testing email from the reminder service'
  // )

  // cron.schedule('*/2 * * * *', ()=>{
  //   console.log('running a task every 2 minute');
  // });
 // jobs();

}

setupAndStartServer();