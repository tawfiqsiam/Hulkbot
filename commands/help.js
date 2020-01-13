module.exports.run = (bot, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Help",
    url: "https://discord.gg/G77DG59",
    description: "You asked for help, here it is.",
    fields: [{
        name: "Owner Only",
        value: "`shutdown`, `restart`, and `changegame`."
      },
      {
        name: "Utility :tools:",
        value: "`mute`, `unmute`, `kick`, `ban`, `auth`, `purge`, `perms`, `filteroff`, and `filteron`."
      },
      {
        name: "Bot Status :robot:",
        value: "uptime and ping."
      },
      {
        name: "Adding the bot, and more help.",
        value: "`joinserver`, `invite`, and `info`."
      },
             {
        name: "Fun",
        value: "`coinflip`, `say`, `myid`, `avata`r, `serverid`, `bork`, and `yomomma`."
      },
      {
        name: "More",
        value: "More commands will be added soon"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: ""
    }
  }
});
}

module.exports.help = {
  name: "help",
  usage: ``, 
  information: ""
}
