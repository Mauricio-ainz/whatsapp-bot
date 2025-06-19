const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Simples servidor HTTP para manter Railway vivo
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot WhatsApp Rodando!'));
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Express funcionando.');
});

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('Escaneia este QR no console do Railway Logs!');
    console.log(qr);
});

client.on('ready', () => {
    console.log('Bot pronto!');
});

client.on('message', message => {
    if(message.body.toLowerCase() === 'oi') {
        message.reply('Olá! Bot rodando na nuvem via Railway!');
    }
});
client.initialize();