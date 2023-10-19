const express = require('express')
const router = express.Router()
const {crearCategoria, editarCategoria, todasCategorias, verCategoria, eliminarCategoria} = require("../controllers/categoriasController");
const { usuarioRequerido, rutasAdmin } = require('../middlewares/authMiddleware');

router.get("/lista-categorias", todasCategorias)
router.get("/ver-categoria/:slug", verCategoria)

router.post("/crear", usuarioRequerido, rutasAdmin, crearCategoria)

router.put("/editar/:id", usuarioRequerido, rutasAdmin, editarCategoria)

router.delete("/eliminar/:id", usuarioRequerido, rutasAdmin, eliminarCategoria)

module.exports = router;