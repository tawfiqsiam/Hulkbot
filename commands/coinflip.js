module.exports.run = (bot, message, args, discord) => {
  const result = Math.round(Math.random());
  if (result) {
    let embed = new discord.RichEmbed()
    .setTitle(`${bot.user.username} Coinflip`)
    .setThumbnail(`https://media3.giphy.com/media/mA51FMHGo3BDi/giphy.gif`)
    .setDescription(`Welp! The coin landed on heads! You win.`)
    .setColor(`GREEN`)
    .setTimestamp()
    message.channel.send({embed: embed})
  } else {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.username} Coinflip`)
    .setThumbnail(`https://media3.giphy.com/media/mA51FMHGo3BDi/giphy.gif`)
    .setDescription(`Welp! The coin landed on tails. You lose.`)
    .setColor(`RED`)
    .setTimestamp()
    message.channel.send({embed: em})
  }
}

module.exports.help = {
  name: "coinflip",
  usage: ``,
  information: "Do a coinflip!"
}
