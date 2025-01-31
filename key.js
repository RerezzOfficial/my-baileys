const fs = require('fs');
const path = require('path');

// Key yang benar (disimpan langsung dalam kode)
const correctKey = 'VREDEN 2025';

// Fungsi untuk memeriksa key sebelum memulai bot
async function checkKey(userKey) {
    // Memeriksa apakah key yang diberikan sesuai dengan correctKey
    if (userKey === correctKey) {
        console.log('Key valid. Bot siap dijalankan!');
        return true; // Key valid
    } else {
        console.log('Key tidak valid! Bot dihentikan.');
        process.exit(); // Hentikan proses bot
    }
}

// Mengekspor fungsi untuk digunakan di tempat lain
module.exports = checkKey;
