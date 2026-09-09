import express from "express";

const app = express();

const tareas = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    completed: true,
  },
];

app.use(express.json());

app.get("/tareas", (req, res) => {
  console.log("GET /tareas");
  res.json(tareas);
});

app.post("/tareas", (req, res) => {
  console.log("POST /tareas");
  tareas.push(req.body);
  console.log(req.body);
  res.send("Tarea agregada exitosamente");
});

app.get("/usuarios", (req, res) => {
  console.log("GET /usuarios");
  console.log(req);
  res.send("consulta exitosa");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});