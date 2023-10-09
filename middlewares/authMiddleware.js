const JWT = require("jsonwebtoken");
const UsuarioModel = require("../models/usuariosModel");

const usuarioRequerido = (req, res, next) => {
  try {
    const decoToken = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.usuario = decoToken;
    next();
  } catch (error) {
    console.log(error);
  }
};

const rutasAdmin = async (req, res, next) => {
  try {
    const usuario = await UsuarioModel.findById(req.usuario._id);

    if (usuario.rol !== "admin") {
      res.status(401).send({message:"Permiso denegado"});
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({ message: "error en adminMiddleware" });
  }
};

module.exports = {
  usuarioRequerido,
  rutasAdmin,
};
