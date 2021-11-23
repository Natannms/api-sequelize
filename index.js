const express = require('express');
const { restart } = require('nodemon');
var path = require('path');
const User = require('./src/models/User')
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
app.get('/checkbyreset/:id', async (req, res) => {
    const users = await User.findByPk(Buffer.from( req.params.id, 'base64').toString('ascii'));
    res.cookie('user', Buffer.from( req.params.id, 'base64').toString('ascii')).sendFile(__dirname + "/src/pages/replacepass.html")  

})
app.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/register.html")
});
app.get('/resetPass', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/resetpass.html")
});
app.get('/replacepass/:id', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/replacepass.html")
});
app.get('/response', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/response.html")
});
app.get('/owner', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/owner/index.html")
});
app.get('/owner-dashaboard', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/owner/dashaboard.html")
});
app.listen(3000, function(){
    console.log('App listen in pornt 300 => http://localhost:3000');
    console.log('App listen in pornt 300 => http://localhost:3000/migrate');
    console.log('App listen in pornt 300 => http://localhost:3000/seeder');
})