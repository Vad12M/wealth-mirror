import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createCrypto,
  deleteAllCryptos,
  deleteCrypto,
  getCryptos,
  updateCrypto
} from "../controllers/CryptoController.js";

export const cryptoRouter = express.Router();

cryptoRouter.post('/crypto/create', checkAuth, createCrypto);
cryptoRouter.put('/crypto/update/:id', checkAuth, updateCrypto);
cryptoRouter.get('/crypto', checkAuth, getCryptos);
cryptoRouter.delete('/crypto/delete/:id', checkAuth, deleteCrypto);
cryptoRouter.delete('/crypto/delete/all', checkAuth, deleteAllCryptos);
