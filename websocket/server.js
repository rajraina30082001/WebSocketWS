import 'dotenv/config';


import express from "express";
import mongoose from "mongoose";
import logger from "./logger/logger.js";
import matchRouter from "./routes/match.js";

const app = express();
app.use(express.json());
app.use("/match",matchRouter);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    logger.info("connected to mongodb");
}).catch((error)=>{
    logger.error(error);
})

app.listen(process.env.PORT,()=>{
    logger.info(`server started on port ${process.env.PORT}`);
})

app.get("/",(req,res)=>{
    res.send("hello world");
})