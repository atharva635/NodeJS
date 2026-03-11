console.log('1. Start of Script');

//Microtask queue (Promise)
Promise.resolve().then(()=> console.log("2. Microtask 1"));

//Timer Queue
setTimeout(()=> console.log('3. Timer 1'),0);

//  i/o queue
const fs = require('fs');
fs.readFile('output.txt',()=> console.log('4. I/O operation'));

//cheack queue
setImmediate(()=> console.log('5. Immediate 1'));

//close queue
process.on('exit',(code)=> {
    console.log('6. Exit event');
});

console.log("7. end of script");