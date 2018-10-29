module.exports.run = (bot, message, args) => {
  const msg = "Posted my server count to DBL."
  require('snekfetch').post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
    .set('Authorization', process.env.tok)
    .send({ server_count: bot.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
    message.channel.send(msg)
}

module.exports.help = {
  name: "postcount"
}
