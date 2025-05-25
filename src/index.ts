import { app } from '@azure/functions';
import sendEmail from './functions/sendEmail';

app.setup({ enableHttpStream: true });


app.timer('dailyTriggerEmail', {
  schedule: '0 43 16 * * *',
  handler: async () => {
    console.log('⏰ Timer aktiviran - šaljem e-mail...');
    await sendEmail();
  },
});
