const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = require("./database")

const User = sequelize.define('User', {
  
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = { User };
