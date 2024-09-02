import express from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createRealEstateValidator } from "../validations/realEstate.js";
import {
  createRealEstate, deleteAllRealEstates,
  deleteRealEstate,
  getRealEstates,
  updateRealEstate
} from "../controllers/RealEstateController.js";

export const realEstateRouter = express.Router();

realEstateRouter.post('/realEstates/create', checkAuth, createRealEstateValidator, createRealEstate);
realEstateRouter.put('/realEstates/update/:id', checkAuth, updateRealEstate);
realEstateRouter.get('/realEstates', checkAuth, getRealEstates);
realEstateRouter.delete('/realEstates/delete/:id', checkAuth, deleteRealEstate);
realEstateRouter.delete('/realEstates/delete/all', checkAuth, deleteAllRealEstates);
