import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  return res.send({
    message: "Hello from tour controller!",
  });
};
