import { app } from '@azure/functions';
import sendEmail from './functions/sendEmail';

app.setup({ enableHttpStream: true });

// CRON izraz: svaki dan u 14:30
app.timer('dailyTriggerEmail', {
  schedule: '0 17 16 * * *',
  handler: async () => {
    console.log('⏰ Timer aktiviran - šaljem e-mail...');
    await sendEmail();
  },
});
