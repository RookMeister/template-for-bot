function setupStart(bot) {
  bot.command('start', async (ctx) => mainMenu(ctx));
}

async function mainMenu(ctx) {
  await ctx.replyWithHTML('Выберите раздел в меню').then(function(resp) {
  }).catch(function(error) {
    if (error.response && error.response.statusCode === 403) {
      console.log('bot blocked', ctx.chat);
    }
  });
}

// Exports
module.exports = {
  setupStart,
}