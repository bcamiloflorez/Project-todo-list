import express from "express";
import tareasRutas from "./rutas/tareasRutas.js"
import usuariosRutas from "./rutas/usuariosRutas.js"
import cors from "cors";

const app = express();

//middleware para serializar el body de las solicitudes

app.use(cors({
  origin: "*", // ["192.168.2.45","205,12,98,1", "https://mydomain.com"]
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use("/tareas", tareasRutas);
app.use("/usuarios", usuariosRutas);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});