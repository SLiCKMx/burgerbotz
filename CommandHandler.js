const Discord = require('discord.js');

function randomize(min, max) 
{
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = 
{
	post: function(channel, arg) 
	{
        	if(arg.length > 1)
		{
			return channel.send(arg);
		} else {
			return channel.send("Correct usage: /post <message>");
		}
	},
	
	rape: function(channel, message, arr)
	{
		if(message.mentions.users.size < 1)
		{
			return message.reply("please specify a user to *rape*!");
		} else {
			let x = randomize(0, rapeGifs.length);

			let botembed = new Discord.RichEmbed()
			.setImage(rapeGifs[x])
			.setDescription(`**${user.username}** has been brutally sodomized by **${sender.username}**`)
			.setColor("#fcc66a");
				
			return message.channel.send(botembed);
		}
	}
};
