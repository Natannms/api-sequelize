const express = require('express');
const { restart } = require('nodemon');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/index.html")
});

app.get('/login', (req, res)=>{
    res.sendFile(_dirname + "/src/pages/login.html")
});

app.get('/register', (req, res)=>{
    res.sendFile(_dirname + "/src/pages/register.html")
});

app.get('/resetPass', (req, res)=>{
    res.sendFile(_dirname + "/src/pages/resetpass.html")
});

app.listen(3000, function(){
    console.log('App listen in pornt 300 => http://localhost:3000')
})