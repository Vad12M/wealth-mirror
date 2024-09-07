import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createMutualFund, deleteAllMutualFunds,
  deleteMutualFund,
  getMutualFunds,
  updateMutualFund
} from "../controllers/MutualFundController.js";

export const mutualFundRouter = express.Router();

mutualFundRouter.post('/mutualFunds/create', checkAuth, createMutualFund);
mutualFundRouter.put('/mutualFunds/update/:id', checkAuth, updateMutualFund);
mutualFundRouter.get('/mutualFunds', checkAuth, getMutualFunds);
mutualFundRouter.delete('/mutualFunds/delete/:id', checkAuth, deleteMutualFund);
mutualFundRouter.delete('/mutualFunds/delete/all', checkAuth, deleteAllMutualFunds);
