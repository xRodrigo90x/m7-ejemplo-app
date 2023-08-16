
import 'dotenv/config'
import db from './src/database/database.js'
import app from './app.js'

let PORT = process.env.PORT || 3000;

const main = async () => {
    try {
        await db.connect();
        console.log("Conectado a la base de datos.")
        app.listen(PORT, () => {
            console.log("Ecuchando en puerto " + PORT)
        });
    } catch (error) {
        console.log(error)
    }
};

main()