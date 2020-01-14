module.exports.run = (bot, message, args, discord) => {
  require('snekfetch').get('https://api.imgur.com/3/g/memes/jFLlwhY?type=json')
  .then(response => {
    let em = new discord.RichEmbed()
    .setTitle("ProXima Random Memes")
    .setImage(response.body.url)
    .setDescription("I got a meme for you!")
    .setTimestamp()
    .setFooter("Random Meme!")
    if (response.body.status == "200 OK") {
      message.channel.send({embed: em})
    } else {
      message.channel.send("I couldn't get a meme...")
    }
  })
}

module.exports.help = {
  name: "meme"
}
