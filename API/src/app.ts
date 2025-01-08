import "dotenv/config";
import  express  from "express";
import cors from "cors";
import {router} from  "./routes/";
import db from "./config/mongo";
import {initializeGenres} from "./services/literaryGenre.service"

const app  = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(router);
initializeGenres();

db.then(()=>console.log("DB READY"));
app.listen(PORT, () =>console.log(`listo el puerto: ${PORT}`));