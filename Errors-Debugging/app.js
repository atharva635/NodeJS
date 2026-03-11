const http = require('http');
// const testingSyntax = require('./syntax')
const runtime  = require('./runtime-error')
const server = http.createServer((req,res)=> {
    console.log(req.url,req.method);
    // testingSyntax();
    runtime();
});

const PORT = 3003;
server.listen(PORT,()=> {
    console.log(`Server running  on adress http://localhost:${PORT}`);
});