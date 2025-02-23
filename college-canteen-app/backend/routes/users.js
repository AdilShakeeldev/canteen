const express = require('express');
const userController = require('../controllers/userController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, verifyAdmin, userController.getUsers);
router.get('/:id', verifyToken, verifyAdmin, userController.getUserById);
router.put('/:id', verifyToken, verifyAdmin, userController.updateUser);
router.delete('/:id', verifyToken, verifyAdmin, userController.deleteUser);

module.exports = router;