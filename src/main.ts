import express from "express";
import { taskRouter } from "./routes/task.routes";
import morgan from "morgan";

export const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/tasks", taskRouter);
