import express from "express";
import {Match} from "../schema/match.schema.js";
import checkStatus from "../utility/checkStatus.js";
import logger from "../logger/logger.js";

const router = express.Router();

router.post("/create-match",async (req,res)=>{
    try {
        const {sport,homeTeam,awayTeam,startTime,endTime,homeScore,awayScore,createdAt} = req.body;
        const status = checkStatus(startTime,endTime);
        const match = new Match({sport,homeTeam,awayTeam,status,startTime,endTime,homeScore,awayScore,createdAt});
        await match.save();
        logger.info("match created successfully");
        res.status(201).json({message:"match created successfully",match});
    } catch (error) {
        logger.error(error);
        res.status(500).json({message:"internal server error",error});
    }
})

router.get("/get-match",async (req,res)=>{
    try {
        const match = await Match.find();
        logger.info("match fetched successfully");
        res.status(200).json({message:"match fetched successfully",match});
    } catch (error) {
        logger.error(error);
        res.status(500).json({message:"internal server error",error});
    }
})

export default router;