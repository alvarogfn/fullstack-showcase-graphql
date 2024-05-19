import express from "express";
import productController from "./controllers/productController";
import showcaseController from "./controllers/showcaseController";

const route = express.Router();

route.get("/showcase/:id", showcaseController.getShowcaseById);
route.get("/showcases", showcaseController.getShowcases);

route.get("/product/:id", productController.getProductById);
route.get("/products", productController.getProducts);

route.post("/products", productController.postProduct);
route.post("/showcases", showcaseController.postShowcase);

route.put("/product/:id", productController.updateProduct);
route.put("/showcase/:id", showcaseController.updateShowcase);

route.delete("/product/:id", productController.deleteProduct);
route.delete("/showcase/:id", showcaseController.deleteShowcase);

export default route;
