const express = require('express')
const app = express();

app.get('/',(req,res) =>{
    res.send("<h1>Welcome you in home page.</h1>");
})

// app.get('/:class',(req,res) =>{
//     res.send("Welcome to class " + req.params.class)
    
// })

app.get('/:class/:batch',(req,res) =>{
    res.send("Welcome to batch " + req.params.batch)
    
})

app.get('/*fly',(req,res) =>{
    res.send("Welcome to string")
    
})


app.listen(5000,() => console.log("Listening on port 5000"))