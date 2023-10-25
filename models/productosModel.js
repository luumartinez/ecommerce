const mongoose = require("mongoose");

const productosSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, min: 3, max: 45 },
    slug: { type: String, required: true },
    descripcion: { type: String, required: true, min: 3, max: 80 },
    precio: { type: Number, required: true, min: 1 },
    categoria: { type: mongoose.ObjectId , ref: "categorias", required: true },
    stock: {type: Number, required: true},
    imagen: {data: Buffer, contentType: String},
    envio: {type: Boolean}
  },
  {timestamps: true, versionKey: false }
);

const ProductosModel = mongoose.model("productos", productosSchema);

module.exports = ProductosModel;
