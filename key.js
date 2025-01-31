const fs = require('fs');
const path = require('path');
const readline = require('readline');
const correctKey = 'VREDEN 2025';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function checkKey() {
    return new Promise((resolve, reject) => {
        console.log('SILAHKAN MASUKAN KEY SCRIPT !')
        rl.question('KEY : ', (userKey) => {
            if (userKey === correctKey) {
                console.log('Key valid. Bot siap dijalankan!');
                resolve(true); 
            } else {
                console.log('Key tidak valid! Bot dihentikan.');
                process.exit(1);
            }
        });
    });
}
module.exports = checkKey;
