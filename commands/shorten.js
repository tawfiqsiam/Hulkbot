const url = require('google-url')
const api = new url({key: process.env.key})
const discord = require('discord.js')

"use strict";

module.exports.run = (bot, message, args) => {
  const link = args.join(" ");
  api.shorten(link, (err, li) => {
    if (err) {
      const emb = new discord.RichEmbed()
      .addField("Link Shortener", `I couldn't shorten your url...`)
      .setTimestamp()
      .setColor("RANDOM")
      message.channel.send({embed: emb})
    } else {
        const em = new discord.RichEmbed()
        .addField("Link Shortener", `I shortened your link for you. Here's your link!\n${li}`)
        .setTimestamp()
        .setColor("RANDOM")
        message.channel.send({embed: em})
    }
  }) 
}

module.exports.help = {
  name: "shorten"
}
