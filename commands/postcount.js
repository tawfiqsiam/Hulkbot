module.exports.run = (bot, message, args) => {
  if (!message.author.id == process.env.oid) return message.channel.send("Nope!");
  const msg = "Posted my server count to DBL."
  require('snekfetch').post(`https://discordbots.org/api/bots/stats`)
    .set('Authorization', process.env.tok)
    .send({ server_count: bot.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err}`));
    message.channel.send(msg)
}

module.exports.help = {
  name: "postcount"
}
