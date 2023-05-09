const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Controllers/auth');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const app = express();

const sequelize=require("./database")

sequelize.sync()

app.use(bodyParser.json());

app.use(cors());


app.use('/api/auth', authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
