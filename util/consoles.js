module.exports = (bot, config) => {
  console.log("Bot is started. Get ready for some sweet commands!\n\n");
  console.log(`Bot Name: ${bot.user.username}\n`);
  console.log(`Bot Owner: FHGDev\n`);
  console.log(`Bot Developers: ${config.Developers.join(" ")}\n`);
  console.log(`~ ${bot.guilds.array().length} Servers, ${bot.channels.array().length} Channels, and ${bot.users.array().length} Users\n`);
}
