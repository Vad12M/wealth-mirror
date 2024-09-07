import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createSaving,
  deleteAllSavings,
  deleteSaving,
  getSavings,
  updateSaving
} from "../controllers/SavingController.js";

export const savingRouter = express.Router();

savingRouter.post('/savings/create', checkAuth, createSaving);
savingRouter.put('/savings/update/:id', checkAuth, updateSaving);
savingRouter.get('/savings', checkAuth, getSavings);
savingRouter.delete('/savings/delete/:id', checkAuth, deleteSaving);
savingRouter.delete('/savings/delete/all', checkAuth, deleteAllSavings);
