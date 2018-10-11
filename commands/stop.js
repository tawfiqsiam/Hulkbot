module.exports.run = (bot, message, args) => {
  var queue = require('./play.js').queue
  const vc = message.member.voiceChannel
  if (!vc) return message.channel.send("You need to be in a voice channel to use this command.");
  const discord = require('discord.js');
  const em = new discord.RichEmbed()
  .addField("Stop Playing", `I stopped playing music in ${vc.name}, and cleared the queue.`)
  .setTimestamp()
  .setColor("RED");
  vc.leave();
  queue = [];
  message.channel.send({embed: em});
}

module.exports.help = {
  name: "stop"
}
