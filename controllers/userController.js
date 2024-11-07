const User = require('../models/User');
const Thought = require('../models/Thought');

// Controller functions for user routes
module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find().select('-__v'); // Remove __v field
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single user by ID, with populated thoughts and friends
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId)
        .populate('thoughts')
        .populate('friends')
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user and remove their associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // BONUS: Remove associated thoughts
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      
      res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } }, // Add friend only if they’re not already in the list
        { new: true }
      ).populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } }, // Pull the friend out of the array
        { new: true }
      ).populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};