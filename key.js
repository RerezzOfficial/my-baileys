const fs = require('fs');
const path = require('path');

// Key yang benar (disimpan langsung dalam kode)
const correctKey = 'VREDEN 2025';

// Fungsi untuk memeriksa key sebelum memulai bot
async function checkKey() {
    // Key yang disediakan oleh pengguna atau aplikasi
    const userKey = 'VREDEN 2025';  // Ini bisa diganti dengan cara yang kamu inginkan untuk menerima key

    // Memeriksa apakah key yang diberikan sesuai dengan correctKey
    if (userKey === correctKey) {
        console.log('Key valid. Bot siap dijalankan!');
        return true; // Key valid
    } else {
        console.log('Key tidak valid!');
        return false; // Key tidak valid
    }
}

// Mengekspor fungsi untuk digunakan di tempat lain
module.exports = checkKey;
