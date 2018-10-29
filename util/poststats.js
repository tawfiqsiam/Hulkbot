const snekfetch = require('snekfetch')
 
module.exports = (bot) => {
 setInterval(() => {
  snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
    .set('Authorization', process.env.tok)
    .send({ server_count: bot.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
}, 3600000)
}
