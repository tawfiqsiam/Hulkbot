module.exports.run = (bot, message, args) => {
  const vc = message.member.voiceChannel
  if (!vc) return message.channel.send("You need to be in a voice channel to use this command.");
  const discord = require('discord.js');
  const em = new discord.RichEmbed()
  .addField("Stop Playing", `I stopped playing music in ${vc.name}.`)
  .setTimestamp()
  .setColor("RED")
  vc.leave()
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "stop"
}
