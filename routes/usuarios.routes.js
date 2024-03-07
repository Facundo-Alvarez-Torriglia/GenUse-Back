const {Router} = require('express');
const { obtenerUsuarios, crearUsuario, editarUsuario, eliminarUsuario } = require('../controllers/usuarios.controllers');


const router = Router();

router.get('/user', obtenerUsuarios);
router.post('/user', crearUsuario);
router.put('/user', editarUsuario);
router.delete('/user', eliminarUsuario);

module.exports = router;
