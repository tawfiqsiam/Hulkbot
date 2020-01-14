module.exports.run = (bot, message, args, discord) => {
  message.channel.send(`My creator is  <@${process.env.oid}>.`)
}

module.exports.help = {
  name: "creators"
}
