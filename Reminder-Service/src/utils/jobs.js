const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/email-config');

/*
10:00 am
Every 5 minutes
we will check are their any pending email which was expected to be sent by now and is pending
*/

const setupJobs = () => {
  cron.schedule('*/2 * * * *', async () => {
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.emailService({
        to: email.receipientEmail,
        subject: email.subject,
        text: email.content,
      }, async (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          await emailService.updateTicket(email.id, {status:"SUCCESS"})
        }
      })
    })
    console.log(response);
  })
}

module.exports = setupJobs;