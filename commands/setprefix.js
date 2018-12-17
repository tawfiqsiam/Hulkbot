const gdata = require('../database/mongoose/GuildData')

async function runCmd(bot, message, args) {
  const prefix = args.join(" ");
  
  if (prefix.length > 3) return message.channel.send("My prefix cannot be over 3 characters long.");
  
  gdata.findOne({guildId: message.guild.id}, (err,data) => {
    const em = new (require('discord.js').RichEmbed)()
    .setTitle("Hulkbot Prefix Changer")
    .setDescription(`I changed my prefix for this guild!`)
    .addField(`Previous Prefix`, data.prefix, true)
    .addField(`New Prefix`, prefix, true)
    .setTimestamp()
    .setColor("GREEN")
    message.channel.send({embed: em})
    data.prefix = prefix;
    data.save().catch(e => message.channel.send("Hmm... Something went wrong. Please try again, or contact FHGDev with \`h!contact`."))
  })
} 

module.exports = {
  help: {
    name: "setprefix"
  }
  run: runCmd
}
