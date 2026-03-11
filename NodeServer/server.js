// const http = require('http')

// function requestHandler(req, res){
//     console.log(req);
// }
// const server = http.createServer(requestHandler);

// const server = http.createServer((req,res)=>{
//     console.log(req);
// });
// server.listen(3002);

// const PORT = 3002;
// server.listen(PORT,()=>{
//     console.log(`Hey Server is http://localhost:${PORT}`);
// });


const http = require('http') 
// Node ka HTTP module import

const server = http.createServer((req,res)=>{
    // Browser request aate hi ye function run hota hai

    console.log(req.url);
    // Browser ka requested URL terminal me print karta hai

    res.end("Hello from server");
    // Browser ko response bhej deta hai
});

const PORT = 3002;

server.listen(PORT,()=>{
    console.log(`Hey Server is http://localhost:${PORT}`);
    // Server start hone par terminal message
});