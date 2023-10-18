const express = require('express')
const router = express.Router()
const {crearCategoria, editarCategoria} = require("../controllers/categoriasController");
const { usuarioRequerido, rutasAdmin } = require('../middlewares/authMiddleware');

router.post("/crearCategoria", usuarioRequerido, rutasAdmin, crearCategoria)

router.put("/editarCategoria/:id", usuarioRequerido, rutasAdmin, editarCategoria)
module.exports = router;