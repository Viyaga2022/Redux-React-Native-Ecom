const express = require('express')
const router = express.Router()

const { registerUser, verifyEmail, loginUser, getMyAccount } = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/verify/:token', verifyEmail)
router.get('/my-account', protect, getMyAccount)

module.exports = router