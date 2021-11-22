const express = require('express');
const { restart } = require('nodemon');
var path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


//controllers and migrations
const Migration = require('./src/config/migrations');
const UserController = require('./src/controller/UserController');

//Use Path
app.use(express.static(path.join(__dirname, '/src/assets/')));

// Use parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Use parse application/json
app.use(bodyParser.json())


//Use controllers
app.use(cors())
app.use(Migration);
app.use(UserController);


//rotas para paginas
app.get('/', (req, res)=>{
    // res.sendFile(__dirname + "/src/pages/index.html")
    res.sendFile(__dirname + "/src/pages/login.html")
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