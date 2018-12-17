const udata = require('../database/mongoose/UserData')

module.exports.run = (bot, message, args) => {
  const randomcoins = Math.ceil(Math.random() * 250)
  
  udata.findOne({userId: message.author.id}, (err,data) => {
    if (!data) {
      const newD = new udata({
        userId: message.author.id,
        cash: randomcoins,
        isBL: false
      })
      newD.save()
      
      let em = new (require('discord.js').RichEmbed)()
      .setTitle("Hulkbot Work")
      .setDescription(`You successfully worked at the office today!`)
      .addField(`Earned Cash:`, `$${randomcoins}.00`, true)
      .addField("Balance:", `$${randomcoins}.00`, true)
      .setTimestamp()
      .setFooter("Use Economy commands to earn more cash!")
      .setColor("GREEN")
      message.channel.send({embed: em})
    } else {
      data.cash = data.cash + randomcoins
      data.save()
      
      let em = new (require('discord.js').RichEmbed)()
      .setTitle("Hulkbot Work")
      .setDescription(`You successfully worked at the office today!`)
      .addField(`Earned Cash:`, `$${randomcoins}.00`, true)
      .addField("Balance:", `$${data.cash}.00`, true)
      .setTimestamp()
      .setFooter("Use Economy commands to earn more cash!")
      .setColor("GREEN")
      message.channel.send({embed: em})
    }
  })
}

module.exports.help = {name: "work"}
