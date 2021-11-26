const Sequelize = require('sequelize');
const db = require('../config/db');
const Band = db.define('Band', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    }
})

module.exports = Band;