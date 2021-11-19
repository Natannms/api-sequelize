const express = require("express");
const Migrations = express.Router();
const db = require('../config/db');

require('dotenv').config();

//Models
// const Match = require('../src/models/match');

//migrate migrations
Migrations.get('/migrate', (req, res) => {
    db.sync();
    res.send('Running migrations of software');
})

Migrations.get('/seeder', async (req, res) => {

    const NewUser = await User.create({
        name: 'Natan',
        email: 'agnusnat.nms@gmail.com',
        password: Buffer.from('123456').toString('base64'),
        firstAccess: true
    });

    res.json({
        Result: {
            NewUser: NewUser,
        }
    });
})

module.exports = Migrations;