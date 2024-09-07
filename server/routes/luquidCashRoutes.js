import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createLiquidCash, deleteAllLiquidCashs,
  deleteLiquidCash,
  getLiquidCashs,
  updateLiquidCash
} from "../controllers/LuquidCashController.js";

export const liquidCashRouter = express.Router();

liquidCashRouter.post('/liquidCash/create', checkAuth, createLiquidCash);
liquidCashRouter.put('/liquidCash/update/:id', checkAuth, updateLiquidCash);
liquidCashRouter.get('/liquidCash', checkAuth, getLiquidCashs);
liquidCashRouter.delete('/liquidCash/delete/:id', checkAuth, deleteLiquidCash);
liquidCashRouter.delete('/liquidCash/delete/all', checkAuth, deleteAllLiquidCashs);
