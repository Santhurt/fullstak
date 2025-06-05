import express from "express";
import connection from "./db_modules.js";

const curso = express.Router();

curso.get("/curso/listartodos", async (req, res) => {
    try {
        const consulta = "select * from cursos;";

        const [resultado] = await connection.query(consulta);

        res.send({
            status: 200,
            data: resultado,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: `${(error.code, error.message)}`,
        });
    }
});

curso.get("/curso/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const consulta = "select * from cursos where id = ?;";

        const [resultado] = await connection.query(consulta, [id]);

        res.send({
            status: 200,
            data: resultado,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: `${(error.code, error.message)}`,
        });
    }
});

curso.post("/curso/crear", async (req, res) => {
    try {

        const payload = req.body;

        const curso = {
            nombre: payload.nombre,
            fecha_inicio: payload.fecha_inicio,
            fecha_fin: payload.fecha_fin,
            estado: payload.estado
        }

        const consulta = "insert into cursos set ?";

        const [resultado] = await connection.query(consulta, curso);



        res.send({
            status: 200,
            data: resultado,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: `${(error.code, error.message)}`,
        });
    }
});

curso.put("/curso/actualizar/:id", async (req, res) => {
    const id = req.params.id;

    try {

        const payload = req.body;

        const curso = {
            nombre: payload.nombre,
            fecha_inicio: payload.fecha_inicio,
            fecha_fin: payload.fecha_fin,
            estado: payload.estado
        }

        const consulta = "update cursos set ? where id = ?";

        const [resultado] = await connection.query(consulta, [curso, id]);



        res.send({
            status: 200,
            data: resultado,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: `${(error.code, error.message)}`,
        });
    }
});

curso.delete("/curso/eliminar/:id", async (req, res) => {
    const id = req.params.id;

    try {

        const consulta = "update cursos set estado = 0 where id = ?";

        const [resultado] = await connection.query(consulta, [id]);

        res.send({
            status: 200,
            data: resultado,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: `${(error.code, error.message)}`,
        });
    }
});
export default curso;
