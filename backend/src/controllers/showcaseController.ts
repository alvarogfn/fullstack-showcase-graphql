import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError";
import Showcase, { ShowcaseType } from "../models/Showcase";

function getShowcaseById(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const result = await Showcase.findById(req.params.id).populate(
        "products"
      );
      res.send(result);
    } catch (e) {
      next(e);
    }
  })();
}

function postShowcase(
  req: Request<{}, {}, ShowcaseType>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const showcase = new Showcase(req.body);
      const createdShowcase = await showcase.save();
      res.send(createdShowcase);
    } catch (e) {
      next(e);
    }
  })();
}

function getShowcases(req: Request, res: Response, next: NextFunction) {
  (async () => {
    try {
      const showcase = await Showcase.find().populate("products");
      res.send(showcase);
    } catch (e) {
      next(e);
    }
  })();
}

function deleteShowcase(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const showcase = await Showcase.findByIdAndRemove(req.params.id);
      if (showcase === null)
        throw new NotFoundError(
          `Showcase with id '${req.params.id}' was not found.`
        );
      res.send(204);
    } catch (e) {
      next(e);
    }
  })();
}

function updateShowcase(
  req: Request<{ id: string }, {}, { body: ShowcaseType }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const showcase = await Showcase.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).populate("products");

      if (showcase === null)
        throw new NotFoundError(
          `The showcase with id '${req.params.id}' was no found!`
        );

      res.send(showcase);
    } catch (e) {
      next(e);
    }
  })();
}

export default {
  getShowcaseById,
  postShowcase,
  getShowcases,
  deleteShowcase,
  updateShowcase,
};
