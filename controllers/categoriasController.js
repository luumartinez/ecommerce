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
    res.status(500).send({ message: "Error al editar" });
  }
};

module.exports = {
  crearCategoria,
  editarCategoria,
};
