import {Router} from "express";
import usuarioRouter from "./usuario.js";

const rutas = Router()

rutas.use("/user", usuarioRouter);

export default rutas;