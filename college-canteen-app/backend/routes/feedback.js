const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, feedbackController.submitFeedback);
router.get('/', verifyToken, feedbackController.getFeedback);

module.exports = router;