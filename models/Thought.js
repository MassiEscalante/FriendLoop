const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction'); // Import the Reaction schema

// Thought schema definition
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'), // Format date with moment
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // Array of reactions using the imported Reaction schema
  },
  {
    toJSON: {
      virtuals: true,
      getters: true, // Enable getters for date formatting
    },
    id: false,
  }
);

// Virtual to get the thought's reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;