module.exports.run = (bot, message, args) => {
  var queue = require('./play.js').queue
  const vc = message.guild.me.voiceChannel
  if (!vc) return message.channel.send("I am not playing music.");
  const discord = require('discord.js');
  const em = new discord.RichEmbed()
  .addField("Stop Playing", `I stopped playing music in ${vc.name}.`)
  .setTimestamp()
  .setColor("RED");
  vc.leave();
  message.channel.send({embed: em});
}

module.exports.help = {
  name: "stop"
}
