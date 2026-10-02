import { PrismaClient } from "@prisma/client";

const clientePrisma = new PrismaClient();

const tareas = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    estado: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    estado: true,
  },
];
//funcion que se llama desde el controla para obtener las tareas de la bd
const obtenerTareas = async () => {
  //llamado a la bd
  const respuesta = await clientePrisma.tarea.findMany();
  return respuesta; //retorno de los datos de la bd
};

const crearTarea = async (body) => {
  const respuesta = await clientePrisma.tarea.createMany({
    data: {
      nombre: body.nombre,
      descripcion: body.descripcion,
      usuarioId: body.usuarioId
    }
  });
  return respuesta
};

const actualizarTarea = async (body, id) => {
  const respuesta = await clientePrisma.tarea.update({
    where: { id: id }, 
    data: {
      nombre: body.nombre,
      descripcion: body.descripcion,
      usuarioId: body.usuarioId,
      estado: body.estado
    }
  })
  return respuesta
};

const eliminarTarea = async (id) => {
  const respuesta = await clientePrisma.tarea.delete({ where: { id: id } })
  return respuesta
};

export default {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
};