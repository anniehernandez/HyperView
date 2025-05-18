import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./DB/DB.js";
import {
    Sign_Up,
    Send_Message
} from "./Controller.js";

dotenv.config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.post("/Sign_Up/", Sign_Up);
router.post("/Message/", Send_Message);  

app.use(cors());
app.use(express.json());
app.use("/api", router);

const SyncDB = async () => {
    try{
        await sequelize.sync({alter: false});
        console.log("Database Syncronized");
    }catch(error){
        console.error("Error at syncing database", error);
    }
};

const Start_Server = async () => {
    try{
        await SyncDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(error){
        console.error("Failed to start server", error);
    }
};
Start_Server();