const { Schema, model } = require('mongoose');

// User Schema definition
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'], // Validation for email format
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Self-reference to the User model
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // Include virtual properties when converting document to JSON
    },
    id: false, // Disable the _id field for virtuals
  }
);

// Virtual to get the user's friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize the User model
const User = model('User', userSchema);

module.exports = User;