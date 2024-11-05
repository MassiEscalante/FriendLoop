const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes'); // We’ll create thoughtRoutes next

// Route for users
router.use('/users', userRoutes);

// Route for thoughts
router.use('/thoughts', thoughtRoutes);

module.exports = router;