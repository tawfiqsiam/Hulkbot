const {baselogger} = require('../src/logger.js')
const owners = require('../json/config.json').owners
module.exports.run = (bot, message, args, discord) => {
  let txt = args.join(' ')
  let em = new discord.RichEmbed()
  .setTitle(`Logging Command`)
  .setDescription(`:scroll: Sending ${txt} to the baselogger... :scroll:`)
  .setThumbnail(bot.user.avatarURL)
  .setAuthor(bot.user.username)
  if (owners.includes(message.author.id)) {
        message.channel.send({embed: em})
        baselogger(bot, txt, bot.user.AvatarURL) 
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "baselog"
}
