
const mineflayer = require('mineflayer');

console.log('Starting Minecraft bot...');

const bot = mineflayer.createBot({
  host: 'Error404-OrphanFound.aternos.me',
  port: 57527,
  username: 'TechnoBladeNeverDies',
  version: '1.21.4',
  auth: 'offline',
  connectTimeout: 30000
});

bot.on('login', () => {
  console.log('Login successful!');
});

bot.once('spawn', () => {
  console.log('Bot connected successfully!');
  console.log('Username:', bot.username);
});

bot.on('end', (reason) => {
  console.log('Bot disconnected:', reason);
});

bot.on('kicked', (reason) => {
  console.log('Kicked:', reason);
});

bot.on('error', (err) => {
  console.log('Error:', err.message);
});
