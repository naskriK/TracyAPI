import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();

  return res.send({
    message: "Hello from tour controller!",
    data: tasks,
  });
};
