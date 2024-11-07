// Load environment variables from .env file
require('dotenv').config();

// Import dependencies
const express = require('express');
const db = require('./config/connection'); // Uses db from config
const routes = require('./routes');

// Initialize the app and set the port from environment variable or default to 3001
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and URL-encoded data for POST and PUT requests only
app.use(express.json({ type: ['application/json', 'text/plain'] }));
app.use(express.urlencoded({ extended: true }));

// Route handling
app.use('/api', routes);

// Start the server and connect to database
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌐 Connected on localhost:${PORT}`));
});