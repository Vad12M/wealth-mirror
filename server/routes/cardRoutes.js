import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createCardValidator } from "../validations/card.js";
import {
  createCard,
  deleteAllCards,
  deleteCard,
  getCards,
  updateCard
} from "../controllers/CardController.js";

export const cardRouter = express.Router();

cardRouter.post('/cards/create', checkAuth, createCardValidator, createCard);
cardRouter.put('/cards/update/:id', checkAuth, updateCard);
cardRouter.get('/cards', checkAuth, getCards);
cardRouter.delete('/cards/delete/:id', checkAuth, deleteCard);
cardRouter.delete('/cards/delete/all', checkAuth, deleteAllCards);
