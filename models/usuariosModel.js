const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      mix: 20,
      min: 2,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
      mix: 20,
      min: 2,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      max: 30,
      min: 7,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      max: 15,
      min: 4,
      trim: true,
    },
    rol: {
      type: String,
      default: "usuario"
    }
  },
  {timestamps: true, versionKey: false},
);

const UsuarioModel = mongoose.model("usuarios", usuarioSchema);

module.exports = UsuarioModel;
