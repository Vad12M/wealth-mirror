import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createCarValidator } from "../validations/car.js";
import {
  createCar,
  deleteAllCars,
  deleteCar,
  getCars,
  updateCar
} from "../controllers/CarController.js";

export const carRouter = express.Router();

carRouter.post('/cars/create', checkAuth, createCarValidator, createCar);
carRouter.put('/cars/update/:id', checkAuth, updateCar);
carRouter.get('/cars', checkAuth, getCars);
carRouter.delete('/cars/delete/:id', checkAuth, deleteCar);
carRouter.delete('/cars/delete/all', checkAuth, deleteAllCars);
