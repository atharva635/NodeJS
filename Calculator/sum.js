
// Browser Form Submit
//         ↓
// POST /calculate-result
//         ↓
// req.on('data')  → body collect
//         ↓
// req.on('end')   → body complete
//         ↓
// parse params
//         ↓
// calculate sum
//         ↓
// res.write()
// res.end()
//         ↓
// Browser ko HTML response



const sumRequestHandler = (req,res) => {
    console.log("In Sum Reuest Handler" , req.url);
    const body = [];
    req.on('data',chunks => body.push(chunks));
    req.on('end',() => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);

        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                <head><title>Practise Set</title></head>
                <body>
                    <h1>Your Sum is ${result}</h1>
                </body>
            </html>
        `);
        return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;