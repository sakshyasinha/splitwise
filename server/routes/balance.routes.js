import express from "express";
import {getBalance} from "../controllers/balance.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router=express.Router();

router.get("/:groupId",protect,getBalance);

export default router;
