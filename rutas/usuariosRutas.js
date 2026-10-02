import { Router } from "express";
import usuariosControlador from "../controladores/usuariosControlador.js";

const ruta = Router();

ruta.get("/", usuariosControlador.obtenerUsuarios);
ruta.post("/",usuariosControlador.crearUsuario)
ruta.post("/inicio",usuariosControlador.inicioUsuario)
ruta.put("/:id",usuariosControlador.actualizarUsuario)
ruta.delete("/:id",usuariosControlador.eliminarUsuario)

export default ruta;