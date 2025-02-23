const express = require('express');
const menuController = require('../controllers/menuController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', menuController.getMenu);
router.post('/', verifyToken, verifyAdmin, menuController.addMenuItem);
router.put('/:id', verifyToken, verifyAdmin, menuController.updateMenuItem);
router.delete('/:id', verifyToken, verifyAdmin, menuController.deleteMenuItem);

module.exports = router;