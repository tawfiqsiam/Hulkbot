let oid = process.env.oid
let config = require('../json/config.json')

module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ')
    let embed = new discord.RichEmbed()
    .setTitle(`Contact System`)
    .setDescription(mes)
    .setColor(`BLUE`)
    .setFooter(`This message was sent by ${message.author.tag}`)
    .setThumbnail(bot.user.avatarURL)
    bot.channels.find('id','501842405960450058').send({ embed })
}

module.exports.help = {
    name: "contact"
}
