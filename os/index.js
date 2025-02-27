const os = require('os');
require('dotenv').config();

function getOSInfo() {
    console.log("Платформа:", os.platform());
    console.log("Свободная память:", os.freemem() / (1024 * 1024 * 1024), "GB");
    console.log("Главная директория:", os.homedir());
    console.log("Имя компьютера:", os.hostname());
    console.log("Сетевые интерфейсы:", os.networkInterfaces());
}

function checkMemory() {
    return os.freemem() / (1024 * 1024 * 1024) > 4;
}

function secureOSInfo() {
    if (process.env.MODE === 'admin') {
        getOSInfo();
    } else {
        console.log("Доступ запрещен. Переключите MODE в .env на 'admin'.");
    }
}

secureOSInfo();
