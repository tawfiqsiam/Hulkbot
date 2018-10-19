module.exports.help = {
  name: "8ball"
}

module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed() 
 let results = ["Ask me again", "my sources say yes", "My sources say no", "Try again later", "It's hazy..."] 
 let res = results[Math.floor(Math.random()*results.length)]
 
 em
 .setTitle("Hulkbot Eight-ball")
 .setDescription(res)
 .setTimestamp()
 .setColor("RANDOM")
 
 message.channel.send({embed: em})
}
