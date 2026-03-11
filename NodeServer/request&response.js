const http = require('http');
const server = http.createServer((req,res)=> {
    console.log(req.url,req.method);
    if (req.url === '/Home'){
        res.write(`<h1>Welocome to home Baby</h1>`);
        return res.end();
    }
    else if (req.url === '/Men'){
        res.write(`<h1>Welocome to Men Baby</h1>`);
        return res.end();
    }
    if (req.url === '/Women'){
        res.write(`<h1>Welocome to Woman Baby</h1>`);
        return res.end();
    }
    if (req.url === '/Kids'){
        res.write(`<h1>Welocome to Kids Baby</h1>`);
        return res.end();
    }
    
    res.write(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mintra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Men">Men</a></li>
                <li><a href="/Women">Women</a></li>
                <li><a href="/Kids">Kids</a></li>
                <li><a href="/Cart">Cart</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>
`);
return res.end();

});

server.listen(3001,()=>{
    console.log(`Server running on adress http://localhost:3001`);
});