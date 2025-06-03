// Importa el módulo mysql2/promise
import mysql from "mysql2/promise";

// Define una función asíncrona para encapsular la lógica de la base de datos
async function main() {
    let connection; // Declara la variable connection fuera del try para que esté disponible en el finally

    try {
        // Crea la conexión a la base de datos
        connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "adso",
            password: "1234", // Considera usar variables de entorno para las credenciales
        });

        console.log("🎉 Conexión exitosa a la base de datos.");

        // Ejecuta una consulta SELECT simple
        const [results, fields] = await connection.query(
            "SELECT * FROM `aprendices`",
        );

        console.log("🔍 Resultados de la consulta:");
        console.log(results); // results contiene las filas devueltas por el servidor

        // Opcional: mostrar información de los campos
        // console.log("📄 Información de los campos:");
        // console.log(fields); // fields contiene metadatos extra sobre los resultados
    } catch (err) {
        console.error("❌ Error:", err);
    } finally {
        // Asegúrate de cerrar la conexión cuando hayas terminado
        if (connection) {
            console.log("🔌 Cerrando conexión...");
            await connection.end();
            console.log("🚪 Conexión cerrada.");
        }
    }
}

// Llama a la función principal para ejecutar el código
main();
