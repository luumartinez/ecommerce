const UsuarioModel = require("../models/usuariosModel");
const { hashPass, compararPassword } = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");

const registro = async (req, res) => {
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
      return res.status(409).send({
        success: false,
        message: "Email ya registrado",
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
    res.status(404).json("error 404")
    res.status(500).json("error del servidor")
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await UsuarioModel.findOne({ email });

    if (!usuario) {
      return res.status(404).json("Email y/o contraseña incorrectos");
    }

    const match = await compararPassword(password, usuario.password);
    if (!match) {
      return res.status(404).json("Email y/o contraseña incorrectos");
    }

    const token = await JWT.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      message: "logueado correctamente",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Error 500 ${error}`);
  }
};

const rutaProtegida = (req, res) =>{
  try {
    res.send("ruta protegida")   
  } catch (error) {
    res.send({success: false, message:"no se pudo autorizar"})
  }
};

const verUsuarios = async (req, res) =>{
  try {
    const usuarios = await UsuarioModel.find()
    res.json(usuarios)
  } catch (error) {
    res.status(400).send({message:"error400"})
  }
};

module.exports = {
  registro,
  login,
  rutaProtegida,
  verUsuarios
};
