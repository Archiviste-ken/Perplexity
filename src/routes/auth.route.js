import Router from "express";
import { verifyEmail, registerUser } from "../controllers/auth.controllers.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";
import { identifyUser } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerUser);

authRouter.get("/verifyEmail", verifyEmail);

authRouter.post("/login", loginValidator, loginUser);

authRouter.get("/get-me", identifyUser,getMe)

export default authRouter;
