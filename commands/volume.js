module.exports.run = (bot, message, args) => {
  const vc = message.member.voiceChannel
  if (!vc) return;
  vc.join().then(conn => {
    conn.setVolume(args.join(" "))
    if (args.join(" ") > 200) {
      message.channel.send("You can't set the volume to over 200.")
    } else {
      message.channel.send(`I set my volume to ${args.join(" ")}`)
    }
  })
}

module.exports.help = {
  name: "setvol"
}
