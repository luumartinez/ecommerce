const UsuarioModel = require("../models/usuariosModel");
const { hashPass, compararPassword } = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");

const registroController = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json("Error en el mail o password");
    }

    const usuario = await UsuarioModel.findOne({ email });

    if (!usuario) {
      res.status(404).json("Email no encontrado");
    }

    const match = await compararPassword(password, usuario.password);
    if (!match) {
      res.status(404).json("Contraseña no encontrada");
    }

    const token = await JWT.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      message: "logueado correctamente",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(`Error 500 ${error}`);
  }
};

module.exports = {
  registroController,
  login,
};
