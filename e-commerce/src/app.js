// set server and connection to db

import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.js";
import { connect } from "mongoose";
import { MONGO_URI } from "./database/mongo.const.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({origin: "*"}));

app.use("/api", router);

async function startServer() {
    try {
        await connect(MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`)
        })
    } catch (error) {
        console.error("Error while connecting to MongoDB", error);
        
    }
}
 
startServer();