import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createCarValidator } from "../validations/car.js";
import {
  createFixedDeposit, deleteAllFixedDeposits,
  deleteFixedDeposit,
  getFixedDeposits,
  updateFixedDeposit
} from "../controllers/FixedDepositController.js";

export const fixedDepositRouter = express.Router();

fixedDepositRouter.post('/fixedDeposits/create', checkAuth, createCarValidator, createFixedDeposit);
fixedDepositRouter.put('/fixedDeposits/update/:id', checkAuth, updateFixedDeposit);
fixedDepositRouter.get('/fixedDeposits', checkAuth, getFixedDeposits);
fixedDepositRouter.delete('/fixedDeposits/delete/:id', checkAuth, deleteFixedDeposit);
fixedDepositRouter.delete('/fixedDeposits/delete/all', checkAuth, deleteAllFixedDeposits);
