const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Controllers/auth');
// const adoptionRoutes = require('./Controllers/adoption');
const petRoutes = require('./Controllers/pets');
const userRoutes = require('./Controllers/user'); 
const { Sequelize } = require('sequelize');
require('dotenv').config();
const app = express();
const {seed, User, Pet} = require('./models')
const sequelize = require("./database");

sequelize
.sync()
// .sync({force:true})
// .then(seed)
app.use(bodyParser.json());

app.use(cors());

app.use('/api/auth', authRoutes);
// app.use('/api/adoption', adoptionRoutes); 
app.use('/api/pets', petRoutes);
app.use('/api/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
