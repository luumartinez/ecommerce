const express = require("express");
const {
  registro,
  login,
  rutaProtegida,
} = require("../controllers/authController");
const {
  usuarioRequerido,
  rutasAdmin,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/registro", registro);
router.post("/login", login);

// router.get('/usuarios', verUsuarios)
router.get("/usuarioReq", usuarioRequerido, rutasAdmin, rutaProtegida);

router.get("/perfil", usuarioRequerido, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/administracion", usuarioRequerido, rutasAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });
  
module.exports = router;
