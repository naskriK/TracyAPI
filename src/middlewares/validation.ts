import { ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validation =
  <T extends ZodSchema>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        console.log(err.errors);
        return res.status(400).send({
          status: "fail",
          errors: err.errors.map((error) => error.message),
        });
      }
    }
  };
