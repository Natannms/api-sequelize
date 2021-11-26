const Sequelize = require('sequelize');
const db = require('../config/db');
const Band = require('./Band');
const Event = db.define('Event', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    main_band_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    date_start: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_finished: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
    },
    cep_location: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
    },
    bands_id:{
        type: Sequelize.JSON,
        allowNull: true,
    },
    situation:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    hour_start:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    hour_finished:{
        type:Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Event;