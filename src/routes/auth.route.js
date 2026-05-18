import Router from "express";
import { verifyEmail, registerUser } from "../controllers/auth.controllers.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerUser);

authRouter.get("/verifyEmail", verifyEmail);

authRouter.post("/login", loginValidator, loginUser);

export default authRouter;
