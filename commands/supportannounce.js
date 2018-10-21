module.exports.run = (bot, message, args, discord) => {
  bot.guilds.forEach((guild, id) => {
    const supportguild = bot.guilds.get('501799714828845082')
    const own = guild.owner
    const msg = args.join(" ");
    if (!supportguild.available) return;
    const sembed = new discord.RichEmbed()
      .addField(`Support Announcement`, `This is an important announcement from the support team.`)
      .addField(`Heyo! This is an official announcement from the support team.`, `Announcement:\n**${msg}**`)
      .setFooter("Announcement | This system will *not* be spammed.")
      .setTimestamp()
      .setColor("GREEN")
    
    own.send({embed: sembed})
  })
}

module.exports.help = {
  name: "supportannounce"
}
