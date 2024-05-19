import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError";

export function handleError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof NotFoundError) {
    return res
      .status(err.statusCode)
      .send({ name: err.name, message: err.message });
  }
  res.status(500).send(err);
}
