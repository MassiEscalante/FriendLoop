const mongoose = require('mongoose');

// Define connection URI for MongoDB
const connectionURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/friendloop';

// Connect to MongoDB
mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the connection
module.exports = mongoose.connection;