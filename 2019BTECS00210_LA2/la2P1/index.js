const express = require('express');

const app = express();
const path = require('path')

app.use(express.urlencoded({extended:false}))

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello ')
})


app.get('/ExamForm',(req,res)=>{
    res.sendFile(path.join(__dirname+'/ExamForm.html'))
})


app.post('/showData',(req,res)=>{
    console.log(req.body);
    res.send(req.body);

})

app.listen(port,()=>console.log('running on port 3000'))