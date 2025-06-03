import express from "express";
import connection from "./db_modules.js";

const aprendiz = express.Router();

aprendiz.get("/aprendiz/listartodos", async (req, res) => {
    try {
        const consulta = "select * from aprendice;";

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

export default aprendiz;
