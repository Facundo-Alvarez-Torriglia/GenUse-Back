const obtenerCursos = (req, res) => {
    res.status(200).json({
        msg:"Curso Obtenido"
    });
}

const crearCurso = (req, res) => {
    res.status(200).json({
        msg:"Curso Creado Satisfactoriamente"
    });
}

const editarCurso = (req, res) => {
    res.status(200).json({
        msg:"Curso Editado Correctamente"
    });
}

const eliminarCurso = (req, res) => {
    res.status(200).json({
        msg:"Curso Eliminado"
    });
}

module.exports = {
    obtenerCursos,
    crearCurso,
    editarCurso,
    eliminarCurso
};