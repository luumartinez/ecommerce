const mongoose = require('mongoose')

const categoriaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 45
    },
    slug:{
        type: String,
        lowercase: true
    }
}, {versionKey: false})

const CategoriaModel = mongoose.model("categorias", categoriaSchema);

module.exports = CategoriaModel;