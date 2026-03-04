const { loginUser, signupUser } = require('../controllers/authController');

const express = require('express');
const router = express.Router();


router.post('/login', loginUser);
router.post('/signup', signupUser);


module.exports = router;