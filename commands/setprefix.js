const gdata = require('../database/mongoose/GuildData')

async function runCmd(bot, message, args) {
  const prefix = args.join(" ");
  
  if (!prefix) return message.channel.send("Please send a prefix for me to set!");
  if (prefix.length > 3) return message.channel.send("My prefix cannot be over 3 characters long.");
  
  gdata.findOne({guildId: message.guild.id}, (err,data) => {
    if (data == null) {
      const newG = new gdata({
        guildId: message.guild.id,
        prefix: prefix,
        isPremium: false,
        welcome: null,
        modlog: null,
        isBL: false
      })
      newg.save()
    }
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
  },
  run: runCmd
}
