import express from "express";
import {
  getMe,
  googleLogin,
  login,
  logout,
  register,
  updateMe,
  updatePassword
} from "../controllers/UserController.js";
import {
  googleLoginValidator,
  loginValidator,
  registerValidator,
  updateMeValidator,
  updatePasswordValidator
} from "../validations/auth.js";
import { handleValidationErrors } from "../utils/handleValidationErrors.js";
import { checkAuth } from "../utils/checkAuth.js";

export const authRouter = express.Router();

authRouter.post("/auth/login", loginValidator, handleValidationErrors, login);
authRouter.post("/auth/googleLogin", googleLoginValidator, handleValidationErrors, googleLogin);
authRouter.post("/auth/logout", checkAuth, logout);
authRouter.post("/auth/register", registerValidator, handleValidationErrors, register);
authRouter.get('/auth/me', checkAuth, getMe);
authRouter.put('/user/update', checkAuth, updateMeValidator, handleValidationErrors, updateMe);
authRouter.post('/user/update-password', checkAuth, updatePasswordValidator, handleValidationErrors, updatePassword);

