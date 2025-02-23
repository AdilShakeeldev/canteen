const express = require('express');
const favoritesController = require('../controllers/favoritesController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', verifyToken, favoritesController.addFavoriteOrder);
router.post('/remove', verifyToken, favoritesController.removeFavoriteOrder);
router.get('/', verifyToken, favoritesController.getFavoriteOrders);

module.exports = router;