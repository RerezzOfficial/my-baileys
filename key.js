const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Key yang benar disimpan langsung dalam kode
const correctKey = 'VREDEN 2025';

// Membuat interface untuk input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk memeriksa key yang dimasukkan
async function checkKey() {
    return new Promise((resolve, reject) => {
        // Meminta pengguna untuk memasukkan key melalui terminal
        rl.question('Masukkan key untuk memulai bot: ', (userKey) => {
            // Memeriksa key yang dimasukkan
            if (userKey === correctKey) {
                console.log('Key valid. Bot siap dijalankan!');
                resolve(true);  // Key valid, lanjutkan bot
            } else {
                console.log('Key tidak valid! Bot dihentikan.');
                process.exit(1);  // Hentikan proses bot
            }
        });
    });
}

// Mengekspor fungsi untuk digunakan di tempat lain
module.exports = checkKey;
