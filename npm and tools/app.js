const http = require('http');

const server = http.createServer((req,res)=> {
    console.log(req);

    // res.end("Server Response");
});


const PORT = 3008;
server.listen(PORT, ()=> {
    console.log(`Server running on adress http://localhost:${PORT}`);
}); 