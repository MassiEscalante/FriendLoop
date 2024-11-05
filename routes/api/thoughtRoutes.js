const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Route to GET all thoughts and POST a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Route to GET one thought, PUT to update, and DELETE a thought by _id
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Route to POST (add) and DELETE (remove) a reaction by reactionId
router.route('/:thoughtId/reactions')
  .post(addReaction);
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;