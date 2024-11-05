// Load environment variables from .env file
require('dotenv').config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');

// Initialize the app and set the port from environment variable or default to 3001
const app = express();
const PORT = process.env.PORT || 3001;
const User = require('./models/User');
const Thought = require('./models/Thought');

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handling
app.use('/api', routes);

// Connect to MongoDB using URI from environment variables or a local fallback
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/friendloop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log Mongo queries being executed (optional for debugging)
mongoose.set('debug', true);

// Start the server
app.listen(PORT, () => console.log(`🌐 Connected on localhost:${PORT}`));