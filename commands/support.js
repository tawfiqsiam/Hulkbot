const discord = require('discord.js')
const em = new discord.RichEmbed()

module.exports.run = (bot, message, args) => {
  em
  .addField("Support Server", `You can join our support server [here](https://discord.gg/AcpYafG).`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "support"
}
