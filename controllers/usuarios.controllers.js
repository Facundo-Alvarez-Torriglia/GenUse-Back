const obtenerUsuarios = (req, res) => {
    res.status(200).json({
        msg:"Usuario Obtenido"
    });
}

const crearUsuario = (req, res) => {
    res.status(200).json({
        msg:"Usuario Creado Satisfactoriamente"
    });
}

const editarUsuario = (req, res) => {
    res.status(200).json({
        msg:"Usuario Editado Correctamente"
    });
}

const eliminarUsuario = (req, res) => {
    res.status(200).json({
        msg:"Usuario Eliminado"
    });
}

module.exports = {
    obtenerUsuarios,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
};