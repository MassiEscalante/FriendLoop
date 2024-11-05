const { Schema, Types } = require('mongoose');
const moment = require('moment'); // Optional: to format timestamps

// Define the Reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Generates a new ObjectId by default
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // 280-character limit as specified
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'), // Formats date
    },
  },
  {
    toJSON: {
      getters: true, // Enables getter for date formatting
    },
    id: false,
  }
);

module.exports = reactionSchema;