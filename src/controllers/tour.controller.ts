import { Prisma, PrismaClient } from "@prisma/client";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();

  return res.send({
    status: "success",
    results: tasks.length,
    data: tasks,
  });
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const tour = await prisma.task.create({ data: req.body });
    return res.send({
      status: "success",
      data: tour,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        status: "fail",
        message: err.message,
      });
    }
  }
};
