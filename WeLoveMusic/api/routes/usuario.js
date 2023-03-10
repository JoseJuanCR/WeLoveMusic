import { Router } from "express";
import UsuarioController from "../controladores/UsuarioController.js";

const usuarioRouter = Router();

usuarioRouter.get('/', UsuarioController.getUsuarios);
usuarioRouter.get('/:id', UsuarioController.getUsuario);
usuarioRouter.post('/', UsuarioController.postUsuario);
usuarioRouter.put('/:id', UsuarioController.putUsuario);
usuarioRouter.delete('/:id', UsuarioController.deletetUsuario);

export default usuarioRouter;