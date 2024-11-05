const { Schema, model, Types } = require('mongoose');
const moment = require('moment'); // Optional: Using moment.js to format dates

// Reaction schema definition (not a full model, just a schema for nested documents)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Default to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // 280-character limit
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'), // Format date with moment
    },
  },
  {
    toJSON: {
      getters: true, // Enable getters for date formatting
    },
    id: false,
  }
);

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
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'), // Format date
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // Array of reactions (nested documents)
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