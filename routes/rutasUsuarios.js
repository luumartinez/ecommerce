const express = require('express')
const { verUsuarios } = require('../controllers/authController')


const router = express.Router()

router.get('/usuarios', verUsuarios)

module.exports = router