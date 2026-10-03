import { Router } from "express";
import usuariosControlador from "../controladores/usuariosControlador.js";
import verificacion from "../midleware/verificacion.js";

const ruta = Router();

ruta.get("/", verificacion.verificacion, usuariosControlador.obtenerUsuarios);
ruta.post("/", usuariosControlador.crearUsuario)
ruta.post("/inicio", usuariosControlador.inicioUsuario)
ruta.put("/:id", verificacion.verificacion, usuariosControlador.actualizarUsuario)
ruta.delete("/:id", verificacion.verificacion, usuariosControlador.eliminarUsuario)

export default ruta;