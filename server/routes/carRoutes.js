import express from "express";
import { getMe, login, register, updateMe, updatePassword } from "../controllers/UserController.js";
import { loginValidator, registerValidator, updateMeValidator, updatePasswordValidator } from "../validations/auth.js";
import { handleValidationErrors } from "../utils/handleValidationErrors.js";
import { checkAuth } from "../utils/checkAuth.js";

export const authRouter = express.Router();

authRouter.post("/auth/login", loginValidator, handleValidationErrors, login);
authRouter.post("/auth/register", registerValidator, handleValidationErrors, register);
authRouter.get('/auth/me', checkAuth, getMe);
authRouter.put('/user/update', checkAuth, updateMeValidator, handleValidationErrors, updateMe);
authRouter.post('/user/update-password', checkAuth, updatePasswordValidator, handleValidationErrors, updatePassword);
