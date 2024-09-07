import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createStock, deleteAllStocks, deleteStock, getStocks, updateStock } from "../controllers/StockController.js";
import { getExternalStocks } from "../controllers/TickerController.js";

export const stockRouter = express.Router();

stockRouter.post('/stocks/create', checkAuth, createStock);
stockRouter.put('/stocks/update/:id', checkAuth, updateStock);
stockRouter.get('/stocks', checkAuth, getStocks);
stockRouter.delete('/stocks/delete/:id', checkAuth, deleteStock);
stockRouter.delete('/stocks/delete/all', checkAuth, deleteAllStocks);

stockRouter.get('/external/stocks', getExternalStocks);
