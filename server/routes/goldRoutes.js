import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createGold, deleteAllGolds, deleteGold, getGolds, updateGold } from "../controllers/GoldController.js";

export const goldRouter = express.Router();

goldRouter.post('/gold/create', checkAuth, createGold);
goldRouter.put('/gold/update/:id', checkAuth, updateGold);
goldRouter.get('/gold', checkAuth, getGolds);
goldRouter.delete('/gold/delete/:id', checkAuth, deleteGold);
goldRouter.delete('/gold/delete/all', checkAuth, deleteAllGolds);
