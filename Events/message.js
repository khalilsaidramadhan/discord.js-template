const client = require('../index.js')
const p = process.env.PREFIX

client.on('message', async message => {
	if(message.author.bot) return
	if (!message.content.startsWith(p)) return;
	if (!message.guild) return;
	if (!message.member) message.member = await message.guild.fetchMember(message);
	const args = message.content.slice(p.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
	if (cmd.length == 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd));
})
