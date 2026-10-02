import usuarioServicios from "../servicios/usuariosServicios.js";

const obtenerUsuarios = async (req, res) => {
    const datos = await usuarioServicios.obtenerUsuarios();
    res.json(datos);
    res.status(200);
};

const crearUsuario = async (req, res) => {
    const datos = await usuarioServicios.crearUsuario(req.body);
    res.status(201).json(datos);
};

const actualizarUsuario = async (req, res) => {
    const datos = await usuarioServicios.actualizarUsuario(req.body, req.params.id)
    res.status(201).json(datos);
};

const eliminarUsuario = async (req, res) => {
    const datos = await usuarioServicios.eliminarUsuario(req.params.id)
    res.status(200).json(datos);
};

const inicioUsuario = async (req, res) => {
    const datos = await usuarioServicios.inicioUsuario(req.body);
    res.status(201).json(datos);
};

export default {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    inicioUsuario
};