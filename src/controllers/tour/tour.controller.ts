import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TourSchema, TourSchemaType } from "./tour.schema";

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

export const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await prisma.task.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!tour) {
      return res.status(400).send({
        status: "fail",
        message: "No tour with provided ID.",
      });
    }

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

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await prisma.task.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!tour) {
      return res.status(400).send({
        status: "fail",
        message: "No tour with provided ID.",
      });
    }

    const updatedTour = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    return res.send({
      status: "success",
      data: updatedTour,
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

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await prisma.task.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!tour) {
      return res.status(400).send({
        status: "fail",
        message: "No tour with provided ID.",
      });
    }

    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

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
