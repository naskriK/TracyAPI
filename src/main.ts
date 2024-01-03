import express from "express";
import { taskRouter } from "./routes/task.routes";

export const app = express();

app.use(express.json());

app.use("/tasks", taskRouter);
