// add review(short text)
//add rating(1-10)

//implement filtering 

import { Router } from "express" ;
import ProductController from "../controller/product.controller.js";

const router = Router();

router.get("", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.post("", ProductController.createProduct);
router.patch("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);


export default router;