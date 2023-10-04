const express = require('express')
const registroController = require('../controllers/registroController')

const router = express.Router()

router.post('/registro', registroController)

module.exports = router