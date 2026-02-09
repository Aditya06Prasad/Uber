const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First Name should be atleast of 3 chars'),
    body('password').isLength({min: 6}).withMessage('Password must be more than of 6 chars')
],
    userController.registerUser
)

module.exports = router