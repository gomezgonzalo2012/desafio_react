import express from "express"
import cors from "cors"
import db from "./database/db.js"
import appRoutes from "./routes/routes.js"
import User from "./models/User.js";         // Importa los modelos que necesitas sincronizar
import Institution from "./models/Institution.js";
import Career from "./models/Career.js";
//import router from './routes';

const app = express()
// configuramos los cors

app.use(cors())
// configuramos json
app.use(express.json())
app.use("/careers",appRoutes ) // raiz de la uri
//app.use('/', router);



// Sincronización de la base de datos
const synchronizeDatabase = async () => {
    try {
      // Asegúrate de sincronizar en el orden correcto si las tablas tienen dependencias entre sí
      await db.authenticate(); // Verifica que la conexión a la base de datos funcione correctamente
      console.log("Conexión a la base de datos exitosa.");
  
      await Institution.sync();  // Sincroniza primero el modelo `Institution`
      await Career.sync();       // Luego el modelo `Career`
      await User.sync();         // Finalmente el modelo `User`, que tiene una referencia a `Institution`
  
      console.log("Sincronización de la base de datos completa.");
    } catch (error) {
      console.error("Error al sincronizar la base de datos:", error);
    }
  };
  
  synchronizeDatabase();  // Llama a la función de sincronización

// db.sync({ alter: true })
//   .then(() => {
//     console.log("Drop and re-sync db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });
////

app.get('/', (req, res)=>{
    res.send('hola mundo')
})

app.listen(8000, ()=>{ // puerto donde escucha el servidor
    console.log(" Server up running in http://localhost:8000")
})

app.use((req, res, next) => {
  console.log("Datos recibidos:", req.body);
  next();
});
