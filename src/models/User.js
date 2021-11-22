const Sequelize = require('sequelize');
const db = require('../config/db');
const User = db.define('User', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_access: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
    }

})

module.exports = User;