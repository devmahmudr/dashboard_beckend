import sidebarController from "../../controller/sidebar/sidebar.controller.js";
import { Router } from "express";

const sidebarRoute =  Router()
sidebarRoute.get('/sidebar',sidebarController.sidebar)

export default sidebarRoute