const ProductosModel = require("../models/productosModel");
const fs = require("fs");
const slugify = require("slugify");

const crearProducto = async (req, res) => {
  try {
    const { nombre, slug, descripcion, precio, categoria, stock, envio } =
      req.fields;
    const { imagen } = req.files;

    switch (true) {
      case !nombre:
        return res
          .status(500)
          .send({ error: "Ingrese el nombre del producto" });
      case !descripcion:
        return res
          .status(500)
          .send({ error: "Ingrese una descripcion del producto" });
      case !precio:
        return res
          .status(500)
          .send({ error: "Ingrese el precio del producto" });
      case !categoria:
        return res
          .status(500)
          .send({ error: "Ingrese la categoria del producto" });
      case !stock:
        return res.status(500).send({ error: "Ingrese el stock del producto" });
      case imagen && imagen.size > 1000000:
        return res
          .status(500)
          .send({ error: "El tamaño de la imagen excede el permitido" });
          case !envio:
        return res
          .status(500)
          .send({ error: "Seleccion si tiene envio" });
    }

    const producto = new ProductosModel({
      ...req.fields,
      slug: slugify(nombre),
    });
    if (imagen) {
      producto.imagen.data = fs.readFileSync(imagen.path);
      producto.imagen.contentType = imagen.type;
    }
    await producto.save();
    res.status(201).send({
      success: true,
      message: "producto creado con exito",
      producto,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
};

const listaProductos = async (req, res) => {
  try {
    const productos = await ProductosModel.find({})
      .select("-imagen")
      .limit(12)
      .populate("categoria")
      .sort({ createdAt: -1 });
    res.status(200).send({
      message: `Mostrando el total de ${productos.length} productos`,
      productos,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const verProducto = async (req, res) => {
  try {
    const producto = await ProductosModel.findOne({ slug: req.params.slug })
      .select("-imagen")
      .populate("categoria");
    res.status(200).send({ message: "producto encontrado", producto });
  } catch (error) {
    res.status(500).send(error);
  }
};

const verImgProducto = async (req, res) => {
  try {
    const producto = await ProductosModel.findById(req.params.pid).select(
      "imagen"
    );
    if (producto.imagen.data) {
      res.set("Content-type", producto.imagen.contentType);
      return res.status(200).send(producto.imagen.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const editarProducto = async (req, res) => {
  try {
    const { nombre, slug, descripcion, precio, categoria, stock, envio } =
      req.fields;
    const { imagen } = req.files;

    switch (true) {
      case !nombre:
        return res
          .status(500)
          .send({ error: "Ingrese el nombre del producto" });
      case !descripcion:
        return res
          .status(500)
          .send({ error: "Ingrese una descripcion del producto" });
      case !precio:
        return res
          .status(500)
          .send({ error: "Ingrese el precio del producto" });
      case !categoria:
        return res
          .status(500)
          .send({ error: "Ingrese el categoria del producto" });
      case !stock:
        return res.status(500).send({ error: "Ingrese el stock del producto" });
      case imagen && imagen.size > 1000000:
        return res
          .status(500)
          .send({ error: "El tamaño de la imagen excede el permitido" });
    }

    const producto = await ProductosModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(nombre) },
      { new: true }
    );
    if (imagen) {
      producto.imagen.data = fs.readFileSync(imagen.path);
      producto.imagen.contentType = imagen.type;
    }
    await producto.save();
    res.status(201).send({
      message: "producto editado con exito",
      producto,
    });
  } catch (error) {
    console.log(error);
  }
};

const eliminarProducto = async (req, res) => {
  try {
    await ProductosModel.findByIdAndDelete(req.params.pid).select("-imagen");
    res.status(200).send({ message: "producto eliminado" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearProducto,
  listaProductos,
  verProducto,
  verImgProducto,
  editarProducto,
  eliminarProducto,
};
