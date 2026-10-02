import tareasServicios from "../servicios/tareasServicios.js";

const obtenerTareas = async (req, res) => {
    const datos = await tareasServicios.obtenerTareas();
    res.json(datos);
    res.status(200);
};

const crearTarea = async (req, res) => {
    const datos = await tareasServicios.crearTarea(req.body);
    res.status(201).json("Tareas Creadas: " + datos.count);
};

const actualizarTarea = async (req, res) => {
    const datos = await tareasServicios.actualizarTarea(req.body, req.params.id)
    res.status(201).json(datos);
};

const eliminarTarea = async (req, res) => {
    const datos = await tareasServicios.eliminarTarea(req.params.id)
    res.status(200).json(datos);
};

export default {
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
};