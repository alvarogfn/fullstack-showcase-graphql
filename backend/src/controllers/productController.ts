import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError";
import Product, { ProductType } from "../models/Product";

function getProductById(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const product = await Product.findById(req.params.id);
      if (product === null)
        throw new NotFoundError(`Product with ${req.params.id} was not found`);
      res.send(product);
    } catch (e) {
      next(e);
    }
  })();
}

function postProduct(
  req: Request<{}, {}, ProductType>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const product = new Product(req.body);
      const createdProduct = await product.save();
      res.send(createdProduct);
    } catch (e) {
      next(e);
    }
  })();
}

function getProducts(
  req: Request<{}, {}, {}, { limit: string | undefined }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const products = await Product.find();
      res.send(products);
    } catch (e) {
      next(e);
    }
  })();
}

function deleteProduct(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (product === null)
        throw new NotFoundError(
          `Product with id '${req.params.id}' was not found.`
        );

      res.send(204);
    } catch (e) {
      next(e);
    }
  })();
}

function updateProduct(
  req: Request<{ id: string }, {}, { body: ProductType }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (product === null)
        throw new NotFoundError(
          `The product with id '${req.params.id}' was no found!`
        );
      res.send(product);
    } catch (e) {
      next(e);
    }
  })();
}

export default {
  getProductById,
  postProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
