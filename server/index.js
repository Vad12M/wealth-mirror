import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import { loginValidator, registerValidator, updateMeValidator, updatePasswordValidator } from "./validations/auth.js";
import { handleValidationErrors } from "./utils/handleValidationErrors.js";
import { getMe, login, register, updateMe, updatePassword } from "./controllers/UserController.js";
import { checkAuth } from "./utils/checkAuth.js";
import { addWaitUser, contact, getContacts, getWaitUsers } from "./controllers/NewClientController.js";
import { addWaitUserValidator, contactValidator } from "./validations/newClient.js";
import { createCar, deleteAllCars, deleteCar, getCars, updateCar } from "./controllers/CarController.js";
import { createCarValidator } from "./validations/car.js";
import { createCard, deleteAllCards, deleteCard, getCards, updateCard } from "./controllers/CardController.js";
import { createCardValidator } from "./validations/card.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.log('Error connecting to the database', err));


const app = express();
app.use(cors());
app.use(express.json());


// auth
app.post("/auth/login", loginValidator, handleValidationErrors, login);
app.post("/auth/register", registerValidator, handleValidationErrors, register);
app.get('/auth/me', checkAuth, getMe);
app.put('/user/update', checkAuth, updateMeValidator, handleValidationErrors, updateMe);
app.post('/user/update-password', checkAuth, updatePasswordValidator, handleValidationErrors, updatePassword);


// for creator
app.post('/addWaitUser', addWaitUserValidator, handleValidationErrors, addWaitUser);
app.post('/contact', contactValidator, handleValidationErrors, contact);
app.get('/wait-users', getWaitUsers);
app.get('/contacts', getContacts);


//car
app.post('/cars/create', checkAuth, createCarValidator, createCar);
app.put('/cars/update/:id', checkAuth, updateCar);
app.get('/cars', checkAuth, getCars);
app.delete('/cars/delete/:id', checkAuth, deleteCar);
app.delete('/cars/delete/all', checkAuth, deleteAllCars);

// card
app.post('/cards/create', checkAuth, createCardValidator, createCard);
app.put('/cards/update/:id', checkAuth, updateCard);
app.get('/cards', checkAuth, getCards);
app.delete('/cards/delete/:id', checkAuth, deleteCard);
app.delete('/cards/delete/all', checkAuth, deleteAllCards);

// real estate
app.post('/real-estate/create', checkAuth, createCarValidator, createCar);
app.put('/real-estate/update/:id', checkAuth, updateCar);
app.get('/real-estate', checkAuth, getCars);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
