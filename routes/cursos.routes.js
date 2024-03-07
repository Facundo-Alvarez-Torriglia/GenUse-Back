const {Router} = require('express');
const { obtenerCursos, crearCurso, editarCurso, eliminarCurso } = require('../controllers/cursos.controller');


const router = Router();

router.get('/cursos', obtenerCursos);
router.post('/cursos', crearCurso);
router.put('/cursos', editarCurso);
router.delete('/cursos', eliminarCurso);

module.exports = router;