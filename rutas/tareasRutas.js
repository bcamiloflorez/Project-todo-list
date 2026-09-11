import { Router } from "express";
import tareasControlador from "../controladores/tareasControlador.js";

const ruta = Router();

ruta.get("/tarea", tareasControlador.obtenerTareas);
ruta.post("/tarea",tareasControlador.crearTarea)
ruta.put("/tarea/:id",tareasControlador.actualizarTarea)
ruta.delete("/tarea/:id",tareasControlador.eliminarTarea)

export default ruta;