const fs = require('fs');
console.log('1. Start of Script');

console.log('2. Reading file Synchronously');
const dataSync = fs.readFileSync('output.txt', 'utf8');
console.log('3.Synchronous read complete');


console.log('4.Reading file  asynchronously');
fs.readFile('output.txt','utf8', (err,dataAsync)=> {
    if(err) throw err;
    console.log('6. Asynchrounous read complete');

});

console.log("5. Phale mai aaunga");