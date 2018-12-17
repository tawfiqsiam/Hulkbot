const mongoose = require('mongoose')

const scheme = mongoose.Schema({
  guildId: String,
  isPremium: { type: Boolean, default: false },
  welcome: { type: String, default: null },
  modlog: { type: String, default: null },
  isBL: { type: Boolean, default: false }
})

module.exports = mongoose.model("GuildData", scheme)
