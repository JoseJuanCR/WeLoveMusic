import { Router } from "express";
import UsuarioController from "../controladores/UsuarioController.js";

const router = Router();

router.get('/', UsuarioController.getUsuarios);
router.get('/:id', UsuarioController.getUsuario);
router.post('/', UsuarioController.postUsuario);
router.put('/:id', UsuarioController.putUsuario);
router.delete('/:id', UsuarioController.deletetUsuario);

export default router;