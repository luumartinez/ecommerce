const express = require('express')
const {registroController, login} = require('../controllers/authController')

const router = express.Router()

router.post('/registro', registroController)
router.post('/login', login)

module.exports = router