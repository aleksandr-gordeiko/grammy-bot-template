import { Telegraf } from 'telegraf';
import { connectDB, closeConnection } from './db';

import reply from './middlewares/reply';
import error from './middlewares/error';
// Import other middlewares

// Import commands

const bot: Telegraf = new Telegraf(process.env.BOT_API_TOKEN);

bot.use(reply);
bot.use(error);
// Use other middlewares

// Bind commands

process.once('SIGINT', () => {
  closeConnection()
    .then(() => console.log('SIGINT occurred, exiting'))
    .catch(() => console.log('SIGINT occurred, exiting with no db connection closed'));
});
process.once('SIGTERM', () => {
  closeConnection()
    .then(() => console.log('SIGTERM occurred, exiting'))
    .catch(() => console.log('SIGTERM occurred, exiting with no db connection closed'));
});

connect()
  .then(() => bot.launch())
  .catch((err) => console.log(err));
