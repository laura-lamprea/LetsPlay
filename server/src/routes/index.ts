import { PrismaClient } from '@prisma/client';
const express = require("express");
const router = express.Router();
const prisma = new PrismaClient();

//controllers
const getAllGames = require("../controllers/getAllGames")

router.get('/', getAllGames)


export default router;