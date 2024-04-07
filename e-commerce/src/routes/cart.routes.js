// get all cart
//get cart content(by id)

import { Router } from "express";
import ShoppingCartController from "../controller/cart.controller.js";

const router = Router();

router.get("", ShoppingCartController.getAllCarts);
router.get("/:cartId", ShoppingCartController.getCartById);
router.post("/:cartId/:productId", ShoppingCartController.addToCart)
router.delete("/carts/:id", ShoppingCartController.deleteCart);
router.delete("/:cartId/:productId", ShoppingCartController.deleteCartProduct);

export default router;