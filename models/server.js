const express = require('express');
const cors = require('cors');
const dbConnection = require ('../database/database')

class Server {
    constructor() {
        this.app = express();
        //variables
        this.puerto = process.env.PORT

        //Conexion Base de Datos
        this.conectarDB();

        //rutas
        this.routes();

        //middlewares
        this.middlewares();

    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //Esto permite leer formato json
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/", require("../routes/usuarios.routes")),
        this.app.use("/", require("../routes/cursos.routes"))
    }

    //Este metodo permite verificar si el servidor esta corriendo correctamente
    listen() {
        this.app.listen(this.puerto, () => {
            console.log(`Corriendo en el puerto`, this.puerto)
        })
    }
}
module.exports = Server;