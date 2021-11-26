const express = require("express");
const Migrations = express.Router();
const db = require('../config/db');
const User = require('../models/User');
const Event = require('../models/Event');
const Band = require('../models/Band');
const BandMember = require('../models/BandMember');
var faker = require('faker');
const { parse } = require("path");
require('dotenv').config();

// Evento varias bandas


const instruments = [
    'adufe',
    'afoxé',
    'agogô',
    'atabaque',
    'batá',
    'bateria',
    'bloco sonoro',
    'bombo',
    'bongô',
    'caixa Surdo',
    'carrilhão',
    'castanhola',
    'caxixi',
    'ceramofone',
    'chocalho',
    'conga',
    'cordofone',
    'cuíca',
    'ganzá',
    'gongo',
    'marimba',
    'metalofone',
    'pandeireta',
    'pandeiro',
    'pratos',
    'reco-reco',
    'repinique',
    'sino',
    'tambor',
    'tamborim',
    'tantã',
    'tímpano',
    'triângulo',
    'vibrafone',
    'xequerê',
    'xilofone',
    'clarinete',
    'clarone',
    'contrafagote',
    'corne',
    'didjeridu',
    'fagote',
    'flauta',
    'flautim',
    'gaita',
    'gaita de foles',
    'harmônica',
    'oboé',
    'requinta',
    'saxofone',
    'bombardino',
    'clarim',
    'corneta',
    'fliscorne',
    'trombone',
    'trompa',
    'trompete',
    'tuba',
    'alaúde',
    'baixo',
    'balalaica',
    'bandola',
    'bandolim',
    'banjo',
    'berimbau',
    'cavaquinho',
    'charango',
    'cítara',
    'contrabaixo',
    'cordofone',
    'guitarra',
    'harpa',
    'rabeca',
    'ukulele',
    'viola',
    'violão',
    'violino',
    'violoncelo',
    'acordeão',
    'clavicórdio',
    'concertina',
    'cravo',
    'espineta',
    'órgão',
    'piano',
    'sintetizador',
    'teclado'
];

Migrations.get('/migrate', function (req, res){

    // Band.belongsTo(Event);
    // Band.belongsToMany(Event, {through:'BandAssoc'}); // quais eventos estão na banda
    // Event.belongsToMany(Band, {through:'EventAssoc'}); // quais Bandas estão no Evento
    db.sync();
})
Migrations.get('/faker', async function (req, res){
    res.json({
       dataType:{
        datetime:{
            code: "faker.datatype.datetime()",
            result: faker.datatype.datetime()
        },
        number:{
            code: "faker.datatype.number()",
            result: faker.datatype.number()
        },
        float:{
            code: "faker.datatype.float()",
            result: faker.datatype.float()
        },
        string:{
            code: "faker.datatype.string()",
            result: faker.datatype.string()
        },
        uuid:{
            code: "faker.datatype.uuid()",
            result: faker.datatype.uuid()
        },
        boolean:{
            code: "faker.datatype.boolean()",
            result: faker.datatype.boolean()
        },
        hexaDecimal:{
            code: "faker.datatype.hexaDecimal()",
            result: faker.datatype.hexaDecimal()
        },
        json:{
            code: "faker.datatype.json()",
            result: faker.datatype.json(),
            messagem: 'this result is by res.json()'
        },
        array:{
            code: "faker.datatype.array()",
            result: faker.datatype.array()
        },
       },
       date:{
        past:{
            code: "faker.date.past()",
            result: faker.date.past()
        },
       }
    })
})

Migrations.get('/bandSeeder/:quantity', async (req, res) => {
    let bandList = [];
    for (let index = 0; index < req.params.quantity; index++) {
        const newBand = await Band.create({
            name:faker.name.findName()+ 'Band'
        })
        bandList.push(newBand);
    }

    res.json({
        bandList:bandList
    })
})

Migrations.get('/membersBand/:quantity', async (req, res) => {
    let listMembers = [];

    for (let index = 0; index < req.params.quantity; index++) {
        const newMember = await BandMember.create({
            name:faker.name.findName(),
            instrument:instruments[Math.floor(Math.random() * instruments.length)]
        });
        listMembers.push(newMember);
    }

    res.json({
        membersList:listMembers
    })
})
Migrations.get('/eventSeeder/:quantity', async function (req, res){
    let listEvent = [];
    let situations = [
        'confirmado',
        'pendente',
        'cancelado'
    ]
    let location = [
        faker.address.streetName()+'PUB',
        faker.address.streetName()+ "'s Bar",
        'Igreja Batista '+ faker.address.streetName(),
        ' - Igreja Pentecostal '+faker.address.streetName(),
        faker.address.streetName()+' Casa de eventos',
    ];
    for (let index = 0; index < req.params.quantity; index++) {
        const newEvent = await  Event.create({
            main_band_id:1,
            name:faker.name.findName()+' Fest',
            location:location[Math.floor(Math.random() * location.length)],
            cep_location:faker.address.zipCode(),
            bands_id:[1,2],
            BandId:faker.datatype.number(),
            situation:situations[Math.floor(Math.random() * situations.length)],
            date_start: '25/11/2021',
            date_finished: '26/11/2021',
            hour_start: '18:00',
            hour_finished: '01:00',
        });

        listEvent.push(newEvent);
    }
    
    res.json({
        EventList:listEvent
    })

})
Migrations.get('/userSeeder', async function (req, res){
    let quantity = 2;

    const UserPrivate = await User.findAll({
        where: {
            name: "Natan"
        }
    });

    if(UserPrivate.length < 1){
        //set User privete
        const NewUser = await  User.create({
            name: 'Natan',
            email: 'agnusnat.nms@gmail.com',
            password: Buffer.from('123456').toString('base64'),
            firstAccess: true
        });
    }

    //regularizando quantity
    for (let index = 0; index <= quantity; index++) {
        const NewUser = await  User.create({
            name: faker.name.findName(),
            email:  faker.internet.email(),
            password: Buffer.from('123456').toString('base64'),
            firstAccess: true
        });
    }


})

// // for npm migrate
// db.sync();

// async function  UserSeeder(quantity){

    
// }


// UserSeeder(1);


module.exports = Migrations;