// server.js

require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database'); 
// Optional: import your models here if you want to sync them immediately:
// const { User, Role, Permission } = require('./src/models');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Optionally, sync your models to create tables if they don’t exist:
// sequelize.sync({ force: false })
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Error syncing database:', err));

// A simple route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

