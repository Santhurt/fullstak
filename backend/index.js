import express from "express";
import aprendiz from "./src/aprendiz.js";
import curso from "./src/cursos.js";
import "dotenv/config";

// Instanciamos la libreria express en la constante app
// Heredamos todos los metodos de express
const app = express();
app.use(express.json());

app.use("/", aprendiz);
app.use("/", curso);

const puerto = 4000;
app.listen(puerto, () => {
    console.log(`Api ejecutandose en el puerto: ${puerto}`);
});
