const express = require('express');
const router = express.Router();
const controller = require('../controllers/authcontroller');

router.post('/signup',controller.signUp);//http://localhost:5000/api/auth/signup
router.post('/signin',controller.signIn);//http://localhost:5000/api/auth/signin

module.exports = router;