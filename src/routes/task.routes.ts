import { validation } from "./../middlewares/validation";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tour/tour.controller";
import { TourSchema } from "../controllers/tour/tour.schema";
import { Router } from "express";

export const taskRouter = Router();

taskRouter.route("/").get(getAllTasks).post(validation(TourSchema), createTask);
taskRouter
  .route("/:id")
  .get(getTask)
  .patch(validation(TourSchema), updateTask)
  .delete(deleteTask);
