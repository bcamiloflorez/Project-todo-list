import tareasServicios from "../servicios/tareasServicios.js";

const obtenerTareas = async (req, res) => {
    const datos = await tareasServicios.obtenerTareas();
    res.json(datos);
    res.status(200);
};

const crearTarea = async (req, res) => {
    const idUsuario = req.datos.id;
    req.body.usuarioId = idUsuario
    const datos = await tareasServicios.crearTarea(req.body,idUsuario);
    res.status(201).send({respuesta: "Tarea Creada", datos: datos});
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