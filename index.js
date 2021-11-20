const express = require('express');
const { restart } = require('nodemon');
var path = require('path');
const app = express();

const Migration = require('./src/config/migrations');

app.use(express.static(path.join(__dirname, '/src/assets/')));
app.use(Migration);
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/index.html")
});

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/login.html")
});

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/register.html")
});

app.get('/resetPass', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/resetpass.html")
});

app.listen(3000, function(){
    console.log('App listen in pornt 300 => http://localhost:3000');
    console.log('App listen in pornt 300 => http://localhost:3000/migrate');
    console.log('App listen in pornt 300 => http://localhost:3000/seeder');
})