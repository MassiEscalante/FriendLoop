const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Route to GET all users and POST a new user
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// Route to GET one user, PUT to update, and DELETE a user by _id
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Route to POST (add) and DELETE (remove) a friend by friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;