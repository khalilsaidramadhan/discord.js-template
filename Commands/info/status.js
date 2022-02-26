const { MessageEmbed } = require('discord.js')
const { connection } = require('mongoose')

module.exports = {

    name: 'status',
    aliases: ['stats'],
    description: 'Menampilkan status bot.',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {

		const roleColor =
	      message.guild.me.displayHexColor === "#000000"
	        ? "#ffffff"
	        : message.guild.me.displayHexColor;

        const Response = new MessageEmbed()
        .setColor(roleColor)
        .setDescription(`**Bot** : \`🟢 ONLINE\` - \`${client.ws.ping} ms\`\n **Uptime** : <t:${parseInt(client.readyTimestamp / 1000)}:R>\n**Database** : \`${switchTo(connection.readyState)}\``)
        await message.channel.send(Response)

    }
    
}

function switchTo(val) {

    var status = ' ';
    switch(val) {

        case 0 : status = `🔴 Disconnected`
        break;
        case 1 : status = `🟢 Connected`
        break;

    }

    return status;

}
