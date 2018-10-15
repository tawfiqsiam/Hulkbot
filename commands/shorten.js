const url = require('google-url')
const api = new url({key: process.env.key})
const discord = require('discord.js')

"use strict";

module.exports.run = (bot, message, args) => {
  const link = args.join(" ");
  var l;
  api.shorten(link, (err, li) => {
    l = li;
  }) 
  const em = new discord.RichEmbed()
  .addField("Link Shortener", `I shortened your link for you. Here's your link!\n${l}`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "shorten"
}
