const pkg = require('../package.json')

module.exports.run = (bot, message, args, discord) => {
  const embed = new discord.RichEmbed()  
  .addField("Hi!", `Hello, I'm ${bot.user.username} version ${pkg.version}, a Discord bot running on NodeJS Version 8.`)
  .addField(`When was I born?`,`My create date is January of 2017`)
  .addField(`Version?`,`I'm currently running on Discord.js version 12.0.0 which utilizes the latest version of Discord.js, an *unofficial* Discord library by hydrabolt.`)
  .addField(`Creators`,`The developers of my source code are <@242734840829575169> and <@140487710727995392>.`)
  .addField(`How to use me`,`To see what I can do, use h!help`)
  .addField(`More!`,`My invocation method is using prefixes, currently, I only respond to messages beginning with h!`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "I'll tell you some information about myself."
}
