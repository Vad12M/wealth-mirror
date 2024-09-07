import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createExpenses,
  deleteAllExpensess,
  deleteExpenses,
  getExpenses,
  updateExpenses
} from "../controllers/expensesController.js";

export const expensesRouter = express.Router();

expensesRouter.post('/expenses/create', checkAuth, createExpenses);
expensesRouter.put('/expenses/update/:id', checkAuth, updateExpenses);
expensesRouter.get('/expenses', checkAuth, getExpenses);
expensesRouter.delete('/expenses/delete/:id', checkAuth, deleteExpenses);
expensesRouter.delete('/expenses/delete/all', checkAuth, deleteAllExpensess);
