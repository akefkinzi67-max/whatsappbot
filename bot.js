const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const puppeteer = require('puppeteer')

const client = new Client({
  puppeteer: {
    headless: true,
    executablePath: puppeteer.executablePath(),
    args: ['--no-sandbox','--disable-setuid-sandbox']
  }
})

client.on('qr', qr => {
  console.log('QR RECEIVED')
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Bot is ready')
})

client.on('message', msg => {
  if (msg.body.toLowerCase() === 'hi') {
    msg.reply('Hello')
  }
})

client.initialize()
