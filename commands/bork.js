module.exports.run = (bot, message, args, discord) => {
	let member = message.mentions.members.first();
	if (!member) return message.channel.send("You need to mention someone.");
	let embed = new discord.RichEmbed()
	.setTitle(`BORK!`)
	.setDescription(`**( ͡° ͜ʖ ͡°) <@${member.user.id}> was borked by <@${message.author.id}>!**`)
	.setThumbnail(`https://i.pinimg.com/originals/f8/28/e1/f828e1c8709335263a70813f8be577b5.gif`)
	.setColor(`RANDOM`)
	message.channel.send({ embed });
}

module.exports.help = { 
	name: "bork"
}
