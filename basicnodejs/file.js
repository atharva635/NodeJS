const file = require('fs');
file.writeFile("output.txt","Writing File",(err)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("File Written Successfully");
    }
    
    file.readFile("output.txt", "utf8", (err, data) => {
    console.log(data);
    });
    
    file.readFile("output.txt", (err, data) => {
    console.log(data);
    });
})