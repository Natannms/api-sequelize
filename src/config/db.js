const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB,  process.env.USER,  process.env.PASSWORD, {
    dialect:  process.env.DIALECT,
    host: process.env.HOST,
    port:  process.env.DBPORT
})

module.exports = sequelize;