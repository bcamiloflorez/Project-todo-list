import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verificacion = async (req, res, next) => {

    if (!req.headers["authorization"]) {
        return res.status(401).send({ respuesta: "No se envio token" })
    }
    const token = req.headers["authorization"].split(" ")[1];
    
    try {
        const usuario = await jwt.verify(token, process.env.SECRETO)
        req.datos = usuario
        next()
    } catch (error) {
        return res.status(401).send({respuesta: "Token Invalido", error: error})
    }
    
}

export default {
    verificacion
}