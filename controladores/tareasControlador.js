import tareasServicios from "../servicios/tareasServicios.js";

const obtenerTareas = (req, res) => {
    const datos = tareasServicios.obtenerTareas();
    res.json(datos);
    res.status(200);
};

const crearTarea = (req, res) => {
    const datos = tareasServicios.crearTarea(req.body);
    res.status(201).json(datos);
};

const actualizarTarea = (req, res) => {
    const datos = tareasServicios.actualizarTarea(req.body, req.params.id)
    res.status(201).json(datos);
};

const eliminarTarea = (req, res) => {
    const datos = tareasServicios.eliminarTarea(req.params.id)
    res.status(201).json(datos);
};

export default {
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
};