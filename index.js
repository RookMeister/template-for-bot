'use strict'

require('dotenv').config();

// Init
const setupMongoose = require('./init/mongo')
const { bot, startBot, startMiddelware } = require('./init/bot')
const { setupStart } = require('./commands/start')

setupMongoose();

startMiddelware();

setupStart(bot);

bot.on('message', (ctx) => {
  const info = 'Извини, я не могу тебя понять.';
  ctx.reply(info);
});

startBot();