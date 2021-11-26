const express = require('express');
const { restart } = require('nodemon');
var path = require('path');
const User = require('./src/models/User')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.APP_PORT || 5000;

//controllers and migrations
const Migration = require('./src/config/migrations');
const UserController = require('./src/controller/UserController');
const EventController = require('./src/controller/EventController');
const BandsController = require('./src/controller/BandsController');

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
app.use(EventController);
app.use(BandsController);


//rotas para paginas
app.get('/api', (req, res)=>{
    res.send({ message: 'Welcome To musician' });
});

// app.get('/login', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/login.html")
// });
// app.get('/checkbyreset/:id', async (req, res) => {
//     const users = await User.findByPk(Buffer.from( req.params.id, 'base64').toString('ascii'));
//     res.cookie('user', Buffer.from( req.params.id, 'base64').toString('ascii')).sendFile(__dirname + "/src/pages/replacepass.html")  

// })
// app.get('/register', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/register.html")
// });
// app.get('/resetPass', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/resetpass.html")
// });
// app.get('/replacepass/:id', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/replacepass.html")
// });
// app.get('/response', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/response.html")
// });
// app.get('/owner', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/owner/index.html")
// });
// app.get('/owner-dashaboard', (req, res)=>{
//     res.sendFile(__dirname + "/src/pages/owner/dashaboard.html")
// });
app.listen(port, function(){
    console.log('App listen in pornt 300 => http://localhost:'+port+'');
    console.log('App listen in pornt 300 => http://localhost:'+port+'/migrate');
    console.log('Crie novas http://localhost:'+port+'/seeder');
    console.log('Crie novas Membros de banda http://localhost:'+port+'/membersBand/50');
    console.log('Crie novos Eventos http://localhost:'+port+'/eventSeeder/50');
    console.log('Crie novos Usuarios http://localhost:'+port+'/userSeeder');
    console.log('Crie novas Bandas http://localhost:'+port+'/bandSeeder/50');
})