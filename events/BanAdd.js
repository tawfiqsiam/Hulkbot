const discord = require('discord.js')
const banreason = require('../json/config.json').banreason
const names = ["bot-logs", "log", "hulkbot-log", "bot-hell"]
module.exports = (bot, guild, member) => {
  guild.channels.forEach(channel => {
    if (channel.topic.includes("bot log") || names.includes(channel.name)) {
      const logchannel = channel
      const embed = new discord.RichEmbed()
      .setTitle("Hulkbot Ban Logger")
      .setDescription(`${member.user.username} was banned from the server for reason ${banreason}.`)
      .setFooter(`${member.user.username} banned from server.`)
      .setTimestamp()
      .setColor("RED")
      logchannel.send({embed: embed})
      if (banreason == null) {
          embed.setDescription(`${member.user.username} was banned from the server.`)
          logchannel.send({embed: embed})
      }
    } else {
      console.warn("No log channel, canceling.")
    }
  })
}
