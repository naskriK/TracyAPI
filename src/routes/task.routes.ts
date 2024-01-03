import { validation } from "./../middlewares/validation";
import { createTask, getAllTasks } from "./../controllers/tour.controller";
import { TourSchema, TourSchemaType } from "./../controllers/tour.schema";
import { Router } from "express";

export const taskRouter = Router();

taskRouter.route("/").get(getAllTasks).post(validation(TourSchema), createTask);
