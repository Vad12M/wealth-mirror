import express from "express";
import {handleValidationErrors} from "../utils/handleValidationErrors.js";
import { addWaitUserValidator, contactValidator } from "../validations/newClient.js";
import { addWaitUser, contact, getContacts, getWaitUsers } from "../controllers/NewClientController.js";

export const adminRouter = express.Router();

adminRouter.post('/addWaitUser', addWaitUserValidator, handleValidationErrors, addWaitUser);
adminRouter.post('/contact', contactValidator, handleValidationErrors, contact);
adminRouter.get('/wait-users', getWaitUsers);
adminRouter.get('/contacts', getContacts);
