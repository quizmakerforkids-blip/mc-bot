
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Error404-OrphanFound.aternos.me',
  port: 57527,
  username: 'TechnoBladeNeverDies',
  version: '1.21.11',
  auth: 'offline'
});

bot.once('spawn', () => {
  console.log('Bot connected successfully!');
  console.log('Username:', bot.username);
});

bot.on('end', () => {
  console.log('Bot disconnected.');
});

bot.on('kicked', (reason) => {
  console.log('Kicked:', reason);
});

bot.on('error', (err) => {
  console.log('Error:', err.message);
});
