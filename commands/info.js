const pkg = require('../package.json')

module.exports.run = (bot, message, args, discord) => {
  const embed = new discord.RichEmbed()  
  .addField("Hi!", `Hello, I'm ${bot.user.username} version ${pkg.version}, a Discord bot running on NodeJS Version 8.`)
  .addField(`When was I born?`,`My create date is January of 2020`)
  .addField(`Version?`,`I'm currently running on Discord.js version 12.0.0 which utilizes the latest version of Discord.js, an *unofficial* Discord library by hydrabolt.`)
  .addField(`Creator`,`The developer of my source code is <@618681842362744832>.`)
  .addField(`How to use me`,`To see what I can do, use h!help`)
  .addField(`More!`,`My invocation method is using prefixes, currently, I only respond to messages beginning with x!`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "I'll tell you some information about myself."
}
