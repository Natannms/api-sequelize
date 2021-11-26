const Sequelize = require('sequelize');
const db = require('../config/db');
const BandMember = db.define('BandMember', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    instrument:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = BandMember;