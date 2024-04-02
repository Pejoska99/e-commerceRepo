// get all cart
//get cart content(by id)

import { Router } from "express";
import ShoppingCartController from "../controller/cart.controller.js";

const router = Router();

router.get("", ShoppingCartController.getAllCarts);
router.get("/:id", ShoppingCartController.getCartById);
router.post("", ShoppingCartController.addToCart);
router.delete("/:id", ShoppingCartController.deleteCartProduct);

export default router;