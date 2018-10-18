module.exports.run = (bot, message, args, discord) => {
  bot.guilds.forEach((guild, id) => {
    const supportguild = bot.guilds.get('501799714828845082')
    const own = guild.owner
    const msg = args.join(" ");
    if (!supportguild.available) return;
    
    if (!message.member.roles.get('501815598662287382') || message.author.id !== process.env.oid) {
      return message.channel.send(`Error\nYou do not have the 'Support Team' role on Hulkbot Support Server.`)
    } else {
      const sembed = new discord.RichEmbed()
      .addField(`Support Announcement`, `This is an important announcement from the support team.`)
      .addField(`Heyo! This is an official announcement from the support team.`, `Announcement:\n**${msg}**`)
      .setFooter("Official Announcement")
      .setTimestamp()
      .setColor("GREEN")
      guild.channels.forEach((id, channel) => {
        // SOON
      })
    }
  })
}

module.exports.help = {
  name: "supportannounce"
}
