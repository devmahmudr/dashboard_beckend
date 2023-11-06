import headerController from "../../controller/header/header.controller.js";
import { Router } from "express";

const headerRoute = Router()

headerRoute.get("/header",headerController.header)
export default headerRoute