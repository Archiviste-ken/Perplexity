import Router from "express";
import { verifyEmail,registerUser } from "../controllers/auth.controllers.js";
import { registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, registerUser);

authRouter.post("/verifyEmail",verifyEmail)



export default authRouter