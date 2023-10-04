const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log(`Conectado a MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error en MongoDB ${error}`);
  }
};

module.exports = connectDB;
