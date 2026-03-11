// const express = require("express");

// const app = express();

// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Middleware 2");
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("Home Page");
// });

// module.exports = app;



const express = require("express");

const app = express();

// form data read karne ke liye
app.use(express.urlencoded({extended:true}));

// Dummy Middleware 1
app.use((req,res,next)=>{
    console.log("Request Path:", req.path);
    next();
});

// Dummy Middleware 2
app.use((req,res,next)=>{
    console.log("Request Method:", req.method);
    next();
});

// Third Middleware
app.use((req,res,next)=>{
    console.log("Third Middleware Triggered");
    next();
});

// Home Route
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page</h1>");
});

// Contact Us Page
app.get("/contact-us",(req,res)=>{

    res.send(`
        <h1>Contact Us</h1>

        <form action="/contact-us" method="POST">

            <input type="text" name="name" placeholder="Enter Name"/>
            <br><br>

            <input type="email" name="email" placeholder="Enter Email"/>
            <br><br>

            <button type="submit">Submit</button>

        </form>
    `);

});

// POST request handle
app.post("/contact-us",(req,res)=>{

    console.log(req.body);

    res.send(`
        <h2>Form Submitted Successfully</h2>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
    `);

});

module.exports = app;