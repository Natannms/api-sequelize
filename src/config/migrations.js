const express = require("express");
const Migrations = express.Router();
const db = require('../config/db');
const User = require('../models/User');
const Event = require('../models/Event');
var faker = require('faker');
const { parse } = require("path");
require('dotenv').config();


Migrations.get('/migrate', function (req, res){
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
Migrations.get('/eventSeeder', async function (req, res){
    const newEvent = await  Event.create({
        main_band_id:1,
        name:faker.name.findName()+' Band',
        date:'2021/11/23',
        hour:'23:55',
        location:`Rua ${faker.address.streetName()} - ${faker.datatype.number()},  ${faker.address.city()} ,   ${faker.address.cityName()},  ${faker.address.state()} / ${faker.address.stateAbbr()} `,
        cep_location:faker.address.zipCode(),
        band_members_id:[1,2]
    });
    res.json(newEvent)

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