const Sequelize = require('sequelize');
const db = require('../config/db');
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
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hour: {
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
    band_members_id:{
        type: Sequelize.JSON,
        allowNull: true,
    }
})

module.exports = Event;