const getytid = require('get-youtube-id')
const ytinfo = require('youtube-info')
const key = process.env.yt
const get = require('request')
const dl = require('ytdl-core')

var queue = []
var isPlaying = false
var tester = "503589571355738113"
var isTester = false

module.exports.run = (bot, message, args) => {
  const m = message.member
  const vc = m.voiceChannel
  const msg = args.join(" ");
  if (!msg) return message.channel.send("You need to include a youtube link, or a song name.")
  if (!vc) return message.channel.send("Join a voice channel first.");
  const guild = bot.guilds.get('501799714828845082')
  if (guild.members.get(m.user.id)) {
    const mem = guild.members.get(m.user.id)
    
    if (mem.roles.get(tester)) {
      isTester = true
    }
  }
  
  if (queue.length > 0 || isPlaying) {
    getID(msg, (id) => {
      addqueue(id)
      ytinfo(id, (err, info) => {
        if (err) throw new Error(err);
        const discord = require('discord.js');
        const embed = new discord.RichEmbed()
        .addField("Added to Queue", `Added **${info.title}** to the queue...`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send({embed: embed})
      })
    })
  } else {
    isPlaying = true
    getID(msg, (id) => {
      queue.push(id)
      play(id, message)
      ytinfo(id, (err, info) => { 
        const discord = require('discord.js')
        const embed = new discord.RichEmbed()
        .addField("Now Playing", `Started playing **${info.title}** in **${vc.name}**.`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send({embed: embed})
      })
    })
  }
}

function play(id, message) {
  voicechannel = message.member.voiceChannel;
  if (!isTester) return message.channel.send("Sorry, only testers can use the music module.");
  voicechannel.join().then(conn => {
    stream = dl(`https://youtube.com/watch?v=${id}`, {
      filter: "audioonly"
    })
    
    var dispatcher = conn.playStream(stream)
    
    dispatcher.on('end', () => {
      queue.pop(queue[0])
      if (queue.length == 0) {
        queue = []
        isPlaying = false
      } else {
        play(queue[0], message)
      }
    })
  })
}

function getID(str, cb) {
  if (isYt(str)) {
    cb(getytid(str))
  } else {
    searchyt(str, (id) => {
      cb(id)
    })
  }
}

function addqueue(strID) {
  if (isYt(strID)) {
    queue.push(getytid(strID))
  } else {
    
  }
}

function searchyt(q, cb) {
  get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(q)}&key=${key}`, (err, res, body) => {
    var json = JSON.parse(body)
    if (json.items) {
      cb(json.items[0].id.videoId);
    }
  })
}

function isYt(str) {
  return str.toLowerCase().indexOf("youtube.com") > -1;
}

module.exports.help = {
  name: "play"
}

module.exports.queue = queue
