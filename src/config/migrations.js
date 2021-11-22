const express = require("express");
const Migrations = express.Router();
const db = require('../config/db');
const User = require('../models/User');
var faker = require('faker');
require('dotenv').config();

// // for npm migrate
// db.sync();

// async function  UserSeeder(quantity){

//     const UserPrivate = await User.findAll({
//         where: {
//             name: "Natan"
//         }
//     });

//     if(UserPrivate.length < 1){
//         //set User privete
//         const NewUser = await  User.create({
//             name: 'Natan',
//             email: 'agnusnat.nms@gmail.com',
//             password: Buffer.from('123456').toString('base64'),
//             firstAccess: true
//         });
//     }

//     //regularizando quantity
//     for (let index = 0; index <= quantity; index++) {
//         const NewUser = await  User.create({
//             name: faker.name.findName(),
//             email:  faker.internet.email(),
//             password: Buffer.from('123456').toString('base64'),
//             firstAccess: true
//         });
//     }
// }


// UserSeeder(1);


module.exports = Migrations;