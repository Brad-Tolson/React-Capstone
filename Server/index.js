const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Controllers/auth');
const config = require('./config');
const { sequelize } = require('./models');

const app = express();

// Connect to PostgreSQL database using Sequelize
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Parse JSON data in request body
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Define routes for authentication
app.use('/api/auth', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
