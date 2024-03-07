const mongoose = require("mongoose");
require("dotenv").config();

const urlConnect = process.env.MONGO_CONNECT

const dbConnection = async() => {
    try {
        await mongoose.connect(urlConnect, {
        })
        console.log("Base de Datos Online");
        
    } catch (error) {
        console.error("Error al conectar con la base de datos:" , error);
        throw new Error ("Error al conectar con la base de datos")
    }
}

module.exports = dbConnection;