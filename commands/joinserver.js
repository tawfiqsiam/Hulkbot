const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  //message.channel.send("Use this to join the help server: https://discord.gg/G77DG59")
  let guild = bot.guilds.get(`636435152716824577`)
  guild.channels.find("name", "general").createInvite({
   temporary: false, maxAge: 400, maxUses: 1, unique: true})
   .then(invite =>{
      let embed = new discord.RichEmbed()
      .setAuthor(`ProXima Inviter ✍`, bot.user.avatarURL)
      .setThumbnail(bot.guilds.get(`636435152716824577`).iconURL)
      .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "ff3333")
      .setDescription(`
Yes! We have a help server!

[Join](${invite} "Expires in 5 minutes")
`)
    .setFooter(`Members: ${guild.memberCount}`);
    
  message.channel.send({embed});
    
  });
};

module.exports.help = {
  name: "joinserver"
};
