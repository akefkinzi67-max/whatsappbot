const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const client = new Client({
  puppeteer: {
    args: ['--no-sandbox','--disable-setuid-sandbox']
  }
})

client.on('qr', qr => {
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Bot is ready!')
})

client.on('message', msg => {
  if (msg.body === 'hi') {
    msg.reply('Hello')
  }
})

client.initialize()
