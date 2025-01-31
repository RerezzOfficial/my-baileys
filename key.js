const fs = require('fs');
const path = require('path');
const readline = require('readline');
const chalk = require('chalk'); 

const correctKey = 'VREDEN 2025'; 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function checkKey() {
    return new Promise((resolve, reject) => {
        console.log(chalk.green('SILAHKAN MASUKAN KEY SCRIPT !')); 
        rl.question('KEY : ', (userKey) => {
            if (userKey === correctKey) {
                console.log(chalk.green('KEY BENAR BOT DI JALANKAN !'));  
                resolve(true); 
            } else {
                console.log(chalk.red('KEY ANDA TIDAK VALID !!!')); 
                process.exit(1); 
            }
        });
    });
}

module.exports = checkKey;
