import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import connectToDb from "./config/connectToDatabase.js";
import routes from "./routes/routes.js"


dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use('/api',routes);


connectToDb();





export default app;