import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config()

const clientePrisma = new PrismaClient();

//funcion que se llama desde el controla para obtener las tareas de la bd
const obtenerUsuarios = async () => {
    //llamado a la bd
    const respuesta = await clientePrisma.usuario.findMany();
    return respuesta; //retorno de los datos de la bd
};

const crearUsuario = async (body) => {
    const respuesta = await clientePrisma.usuario.create({
        data: {
            nombre: body.nombre,
            correo: body.correo,
            contra: await encriptarContra(body.contra)
        }
    });
    return respuesta
};

const actualizarUsuario = async (body, id) => {
    const respuesta = await clientePrisma.usuario.update({
        where: { id: id },
        data: {
            nombre: body.nombre,
            correo: body.correo,
            contra: await encriptarContra(body.contra)
        }
    })
    return respuesta
};

const eliminarUsuario = async (id) => {
    const respuesta = await clientePrisma.usuario.delete({ where: { id: id } })
    return respuesta
};

const inicioUsuario = async (body) => {
    //llamado a la bd
    let { correo, contra } = body
    let respuesta = {}
    let usuario = await clientePrisma.usuario.findUnique({
        where: {
            correo: correo
        }
    });
    if (usuario) {
        if (await compararContra(contra, usuario.contra)) {
            usuario.contra = ""
            const token = jwt.sign(usuario, process.env.SECRETO)
            respuesta = {respuesta: "Inicio Exitoso", datos: token};
        }else{
            respuesta = {respuesta: "Contraseña erronea"}
        }
    }else{
        respuesta = {respuesta: "Usuario NO Existe"}
    }
    return respuesta
};

async function encriptarContra(contra) {
    const saltRounds = 10
    return await bcrypt.hash(contra, saltRounds);
}
async function compararContra(contraBody, contraBD) {
    return await bcrypt.compare(contraBody, contraBD);
}

export default {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    inicioUsuario
};