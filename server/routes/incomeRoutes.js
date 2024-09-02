import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createCarValidator } from "../validations/car.js";
import {
  createIncome,
  deleteAllIncomes,
  deleteIncome,
  getIncomes,
  updateIncome
} from "../controllers/IncomeController.js";

export const incomeRouter = express.Router();

incomeRouter.post('/incomes/create', checkAuth, createCarValidator, createIncome);
incomeRouter.put('/incomes/update/:id', checkAuth, updateIncome);
incomeRouter.get('/incomes', checkAuth, getIncomes);
incomeRouter.delete('/incomes/delete/:id', checkAuth, deleteIncome);
incomeRouter.delete('/incomes/delete/all', checkAuth, deleteAllIncomes);
