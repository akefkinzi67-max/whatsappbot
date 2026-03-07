const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', msg => {
    if (msg.body === 'مرحبا') {
        msg.reply('مرحبا، أنا مساعد نفسي بالذكاء الاصطناعي. كيف أقدر أساعدك؟');
    }
});

client.initialize();