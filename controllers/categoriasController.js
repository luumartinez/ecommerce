const CategoriaModel = require("../models/categoriasModel");
const slugify = require("slugify");

const crearCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) {
      return res.status(401).send({
        message: "Necesita ingresar un nombre",
      });
    }

    const categoriaRepetida = await CategoriaModel.findOne({ nombre });
    if (categoriaRepetida) {
      return res.status(409).send({
        message: "Esta categoria ya existe",
      });
    }

    const categoria = await new CategoriaModel({
      nombre,
      slug: slugify(nombre),
    }).save();
    res.status(201).send({
      success: true,
      message: "categoria creada con exito",
      categoria,
    });
  } catch (error) {
    res.status(500).send({
      message: "error al crear categoria",
      error,
    });
  }
};

const editarCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    const { id } = req.params;
    const categoria = await CategoriaModel.findByIdAndUpdate(
      id,
      { nombre, slug: slugify(nombre) },
      { new: true }
    );
    res.status(200).send({
      message: "Categoria editada correctamente",
      categoria,
    });
  } catch (error) {
    res.status(500).send({ message: "Error al editar", error });
  }
};

const todasCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaModel.find({});
    res.status(200).send({
      message: "Mostrar lista de categorias",
      categorias,
    });
  } catch (error) {
    res.status(500).send({
      message: "No se pueden mostrar",
      error,
    });
  }
};

const verCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaModel.findOne({ slug: req.params.slug });
    res.status(200).send({ message: "Categoria encontrada", categoria });
  } catch (error) {
    res.status(500).send({ message: "No se puede obtener categoria", error });
  }
};

const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    await CategoriaModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Categoria eliminada" });
  } catch (error) {
    res.status(404).send({ message: "categoria no encotrada" });
  }
};

module.exports = {
  crearCategoria,
  editarCategoria,
  todasCategorias,
  verCategoria,
  eliminarCategoria,
};
