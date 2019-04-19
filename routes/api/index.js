const router = require('express').Router();
const quizRoutes = require('./quizzes');
const cardRoutes = require('./cards');
const userRoutes = require('./user');

// // Quiz routes
router.use('/quiz', quizRoutes);

// Card routes
router.use('/discover', cardRoutes);

//user routes
router.use('/registration', userRoutes);

module.exports = router;