import doctorController from "../../controller/doctor/doctor.controller.js";
import { Router } from "express";
import { TokenChecker } from "../../middleware/checkToken.js";

const doctorRoute = Router()

doctorRoute.get('/doctors',TokenChecker,doctorController.findAll)
doctorRoute.get('/doctor/:id',TokenChecker,doctorController.findOne)
doctorRoute.get('/search',TokenChecker,doctorController.search)
doctorRoute.post('/doctor',TokenChecker,doctorController.createDoctor)
doctorRoute.put('/doctor/:id',TokenChecker,doctorController.update)
doctorRoute.delete('/doctor/:id',TokenChecker,doctorController.deleteDoctor)

export default doctorRoute