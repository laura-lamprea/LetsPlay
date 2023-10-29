"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
//controllers
const getAllGames = require("../controllers/getAllGames");
const createGame = require("../controllers/createGame");
const updateGameById = require("../controllers/updateGameById");
const deleteGameById = require("../controllers/deleteGameById");
const getGameById = require("../controllers/getGameById");
//middleware
const validatePostGame = require("../middlewares/postSchemaMiddleware");
const validatePatchGame = require("../middlewares/patchSchemaMiddleware");
const validateDeleteGame = require("../middlewares/deleteSchemaMiddleware");
router.get('/', getAllGames);
router.post('/', validatePostGame, createGame);
router.patch('/', validatePatchGame, updateGameById);
router.delete('/', validateDeleteGame, deleteGameById);
router.get('/game', getGameById);
exports.default = router;
