const fs = require('fs');
const path = require('path');

// Key yang benar (disimpan langsung dalam kode)
const correctKey = 'VREDEN 2025';

// Menentukan path file key.txt secara default di dalam kode
const keyFilePath = path.join(__dirname, 'key.txt');

// Fungsi untuk memeriksa key sebelum memulai bot
async function checkKey() {
    // Memeriksa apakah file key ada
    if (fs.existsSync(keyFilePath)) {
        const storedKey = fs.readFileSync(keyFilePath, 'utf8').trim();
        // Memeriksa apakah key yang disimpan sesuai dengan key yang benar
        if (storedKey === correctKey) {
            console.log('Key valid. Bot siap dijalankan!');
            return true; // Key valid
        } else {
            console.log('Key tidak valid!');
            return false; // Key tidak valid
        }
    } else {
        console.log('File key.txt tidak ditemukan!');
        return false; // File key tidak ditemukan
    }
}

// Mengekspor fungsi untuk digunakan di tempat lain
module.exports = checkKey;
