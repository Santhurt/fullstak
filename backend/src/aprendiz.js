import express from "express";
import connection from "./db_modules.js";

const aprendiz = express.Router();

aprendiz.get("/aprendiz/listartodos", async (req, res) => {
    try {
        const consulta = "select * from aprendices;";

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

aprendiz.get("/aprendiz/buscarid/:id/", async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id);

        const consulta = `select * from aprendices where id = ?`;
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

aprendiz.post("/aprendiz/crear", async (req, res) => {
    try {
        let payload = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
        };

        console.log(payload);

        const consulta = "insert into aprendices set ?";
        const [resultado] = await connection.query(consulta, payload);

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

aprendiz.put("/aprendiz/actualizar/:id", async (req, res) => {
    try {
        const id = req.params.id;

        let payload = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
        };

        const consulta = "UPDATE aprendices SET ? WHERE id = ?";
        const [resultado] = await connection.query(consulta, [payload, id]);

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

aprendiz.delete("/aprendiz/eliminar/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const consulta = "UPDATE aprendices SET estado = 0 WHERE id = ?";
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

export default aprendiz;
