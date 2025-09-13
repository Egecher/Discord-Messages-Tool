require('dotenv').config();
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";

async function getMessages(params) {
    try {
        const response = await axios.get(`https://discord.com/api/v10/channels/${params}/messages`, {
            headers: {
                Authorization: `Bot ${process.env.TOKEN}`
            },
            params: {
                limit: 100
            }
        });

        const messages = response.data.reverse();
        if (messages.length === 0) return console.log(green, "Bu kanalda mesaj yok.", reset);
        for (const message of messages) {
            console.log(green, message.author.username, reset, '\n>', message.content, '\n');
        }
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            switch (status) {
                case 400:
                    console.error(red, "Hata: Geçersiz istek.", reset);
                    break;
                case 401:
                    console.error(red, "Hata: Bot token geçersiz veya yetkisiz.", reset);
                    break;
                case 403:
                    console.error(red, "Hata: Bu kanala erişim yetkiniz yok.", reset);
                    break;
                case 404:
                    if (data.code === 10003) {
                        console.error(red, "Hata: Kanal bulunamadı. Lütfen doğru Kanal ID girin.", reset);
                    } else if (data.code === 10008) {
                        console.error(red, "Hata: Mesaj bulunamadı.", reset);
                    } else {
                        console.error(red, `Hata 404: ${data.message}`, reset);
                    }
                    break;
                default:
                    console.error(red, `Hata ${status}: ${data.message || error.message}`, reset);
            }
        } else {
            console.error(red, "Hata:", error.message, reset);
        }
    }
}

function askChannel() {
    rl.question('Kanal ID giriniz (Çıkmak için "exit" yazın): ', async (channelId) => {
        if (channelId.toLocaleLowerCase() === 'exit') {
            console.log('Program kapanıyor..');
            rl.close();
            return;
        }

        await getMessages(channelId);
        askChannel();
    });
}

askChannel();