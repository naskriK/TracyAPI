import { getAllTasks } from "./../controllers/tour.controller";
import { Router } from "express";

export const taskRouter = Router();

taskRouter.route("/").get(getAllTasks);
