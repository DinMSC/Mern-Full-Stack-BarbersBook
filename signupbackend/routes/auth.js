const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const appointController = require('../controllers/appointController');
const { protect } = require('../middleware/authenticate');

// pristup rutama i logikom u tim rutama
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/myinfo', protect, appointController.setAppoint);
router.get('/myappoint', protect, authController.getMyInfo);
router.get('/myinfo', protect, appointController.getAppoint);

module.exports = router;
