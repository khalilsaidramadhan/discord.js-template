const {Collection, Client, Discord, MessageEmbed} = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');
const client = new Client({
  disableEveryone: true
});
const { readdir, readdirSync } = require('fs');
const mongoose = require('mongoose');
const prefix = process.env.PREFIX;
module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
["command"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
}); 

client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`${client.user.username} ✅`)
})

client.login(process.env.TOKEN)
  .catch(error => {
  
  console.log('TOKEN IS INVALID')
  
})
