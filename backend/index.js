import express from "express";

// Instanciamos la libreria express en la constante app
// Heredamos todos los metodos de express
const app = express();

// Primer ruta

app.get("/", (request, response) => {
    response.send("Hola mundo");
});

const puerto = 4000;
app.listen(puerto, () => {
    console.log(`Api ejecutandose en el puerto: ${puerto}`);
});
