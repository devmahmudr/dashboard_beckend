import { Router } from "express";
import authController from "../../controller/auth/auth.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import { TokenChecker } from "../../middleware/checkToken.js";

const authRoute = Router();

authRoute.post("/signup",authMiddleware.signupChack,authController.signup)
authRoute.post("/signin",authController.signin)

export default authRoute;
