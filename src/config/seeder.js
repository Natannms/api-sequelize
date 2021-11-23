const express = require("express");
const Migrations = express.Router();
const db = require('../config/db');
const User = require('../models/User');
require('dotenv').config();


function seeder(){
    const NewUser =  User.create({
        name: 'Natan',
        email: 'agnusnat.nms@gmail.com',
        password: Buffer.from('123456').toString('base64'),
        firstAccess: true
    });
}
seeder();


module.exports = Migrations;