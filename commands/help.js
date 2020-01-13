module.exports.run = (bot, message, args, discord) => {
 	let categories = ["Bot", "Moderation", "Fun", "Music", "More help", "NSFW"]
	let fun = ["coinflip", "chucknorris", "yomomma", "bork", "advice", "redeem", "knockknock", "meme", "avatar", "snek", "stats", "timer", "whois", "weather"]
	let bota = ["uptime", "ping", "@Hulkbot", "joinserver", "invite", "info", "stats", "listservers", "creators", "help"]
	let mod = ["ban", "hackban", "unhackban", "softban", "kick", "mute", "unmute", "purge"]
	let nsfw = ["pussy", "ass", "boobs", "dick", "fuck"]
	let moosic = ["play", "clearqueue", "stop"]
	let msg = args.join(" ")
	let em = new discord.RichEmbed()
	.setTitle("Help Menu")
	.setFooter(`New help menu! If you like it, let me know with hx!contact.`)
	.setColor("RANDOM")
	.setTimestamp()
	
	if (msg == categories[4].toLowerCase() || msg == categories[4]) {
		em
		.setTitle("✔ More help")
		.setDescription("Soon!")
		.addField("EVEN MORE HELP?", "Do you *still* need more help? Use the `x!contact` command, and I'll get to you ASAP.")
		
		message.channel.send({embed: em})
	}
	
	if (msg == categories[2].toLowerCase() || msg == categories[2]) {
		em
		.setTitle("🍭 Fun")
		.setDescription("Let's get some fun going in this boring place!")
		.addField("Fun Commands", `**${fun.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[1].toLowerCase() || msg == categories[1]) {
		em
		.setTitle("⚒ Moderation")
		.setDescription("Let me handle the bad bois... Hehe.")
		.addField("Moderation Commands", `**${mod.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[0].toLowerCase() || msg == categories[0]) {
		em
		.setTitle("🤖 Bot")
		.setDescription(`Get to kno da wae... UMMM I mean the bot.`)
		.addField("Bot Commands", `**${bota.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[5].toLowerCase() || msg == categories[5]) {
		em
		.setTitle("🔞 NSFW")
		.setDescription(`These commands are *not* for children!`)
		.addField(`NSFW Commands`, `**${nsfw.join("\n")}**`, true) 
		
		message.channel.send({embed: em})
	}
	
	if (msg == categories[4].toLowerCase() || msg == categories[4]) {
		em
		.setTitle("🎵 Music")
		.setDescription("Get some tunes poppin in your voice channel!")
		.addField(`Music Commands`, `**${moosic.join("\n")}**`, true)
	}
	
	if (!msg) {
		em
		.setDescription(`**Use x!help [category] for help on a certain category.**`)
		.setTimestamp()
		.addField("Categories", `**${categories.join("\n")}**`, true)
		.addField("Links", "[Invite](https://discordapp.com/api/oauth2/authorize?client_id=666237538431795240&permissions=8&redirect_uri=https%3A%2F%2Fbot.hulkbot.tk%2Fhome&response_type=code&scope=bot%20guilds) | [Discord](https://discord.gg/G77DG59)", true)
		
  	message.channel.send({embed: em})
	};
};

module.exports.help = {
  name: "help"
};
