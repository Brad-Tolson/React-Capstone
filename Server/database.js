const {Sequelize} = require('sequelize')
require('dotenv').config()
const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(
  CONNECTION_STRING,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
)

module.exports = sequelize