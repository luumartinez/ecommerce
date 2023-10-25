const express = require('express')
const { usuarioRequerido, rutasAdmin } = require('../middlewares/authMiddleware')
const { crearProducto, listaProductos, verProducto, verImgProducto, editarProducto, eliminarProducto } = require('../controllers/productosController')
const formidable = require('express-formidable')

const router = express.Router()

router.post("/crear", usuarioRequerido, rutasAdmin, formidable(), crearProducto)

router.get("/lista-productos", listaProductos)
router.get("/:slug", verProducto)

router.get("/img/:pid", verImgProducto)

router.put("/editar/:pid", usuarioRequerido, rutasAdmin, formidable(), editarProducto)

router.delete("/eliminar/:pid", eliminarProducto)

module.exports = router