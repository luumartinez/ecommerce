const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

dotenv.config()

connectDB();

app.use(cors())

app.use(bodyParser.json());

app.use("/api", require('./routes/authRuta'));

app.use("/api", require('./routes/rutasUsuarios'));

app.use("/api/categorias", require('./routes/rutasCategorias'));

app.get("/", (req, res) =>{
    res.send({
        message: "HOLA ECOMMERCE"
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Servidor puesto en marcha en el puerto ${PORT}`)
})