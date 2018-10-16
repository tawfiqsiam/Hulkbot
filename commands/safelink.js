const req = require('snekfetch')
const discord = require('discord.js')
module.exports.run = (bot, message, args) => {
  const link = args.join(" ");
  
  req.get(`https://spoopy.link/api/${link}`)
  .then(res => {
    let bod = res.body
    if (bod.chain) {
      const emb = new discord.RichEmbed()
      .addField("Link Checker", `Link: ${bod.chain.url}\nIs this link safe? ${bod.chain.safe}\n`)
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter("Hulkbot Link Checker")
      message.channel.send({embed: emb})
      
      if (bod.chain.reasons[0] == "INVALID") {
       const embed = new discord.RichEmbed()
       .addField("Link Checker", `Your link, ${bod.chain.url}, is invalid!`)
       .setTimestamp()
       .setColor("RANDOM")
       .setFooter("Hulkbot Link Checker")
       message.channel.send({embed: embed})
      }
    }
  })
  .catch(console.error)
}

module.exports.help = {
  name: "safelink"
}
