
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuariosRoutes from './src/routes/usuarios.routes.js'

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));


//ENDPOINTS
app.use("/api/v1/usuarios", usuariosRoutes)

//RUTAS NO DEFINIDAS
app.all("*", (req, res) => {
    res.status(404).send("Ruta no encontrada.")
});

export default app;