const UsuarioModel = require("../models/usuariosModel");
const {hashPass} = require("../helpers/authHelper");

const registroController = async (req, res) => {
  try {
      const {nombre, apellido, email, password} = req.body;
    //   console.log(req.body)
      if (!nombre) {
            return res.send({ error: "Nombre es un campo obligatorio" });
    }
    if (!apellido) {
      return res.send({ error: "apellido es un campo obligatorio" });
    }
    if (!email) {
      return res.send({ error: "email es un campo obligatorio" });
    }
    if (!password) {
      return res.send({ error: "Contraseña es un campo obligatorio" });
    }

    const usuarioRepetido = await UsuarioModel.findOne({ email });
    if (usuarioRepetido) {
      return res.status(200).send({
        success: true,
        message: "Usuario ya registrado",
      });
    }
    const hashPassword = await hashPass(password);
    const usuario = await new UsuarioModel({
      nombre,
      apellido, 
      email,
      password: hashPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Usuario registrado",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error en registro",
      error,
    });
  }
};

module.exports = registroController;
