const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });
client.on('message', msg => {
 if (msg.content.includes('4')||msg.content.includes('four')) 
 {
 msg.reply('Hey, whats the deal with this? You mentioned that number, do you want me to die? Three is fine. Five is fine. But when you are in the presence of that number something bad will happen!');
 }
 
 });

client.login('NjEwODU4OTI5OTYyMDkwNTA3.XVLZXQ.-0HlY24TzVrvywaBJrRoaj26ZNI');