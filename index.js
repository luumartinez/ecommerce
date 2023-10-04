const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const bodyParser = require('body-parser');

const app = express();

dotenv.config()

connectDB();

app.use(bodyParser.json());

app.use("/api/auth", require('./routes/authRuta'));

app.get("/", (req, res) =>{
    res.send({
        message: "HOLA ECOMMERCE"
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Servidor puesto en marcha en el puerto ${PORT}`)
})