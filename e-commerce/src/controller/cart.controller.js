// impllement controller for each route
import ShoppingCartService from "../services/cart.service.js";

export default class ShoppingCartController {



    static async addToCart(req, res) {
        try {
            const { productId } = req.body;
            const cart = await ShoppingCartService.addToCart(productId);
            res.status(201).send(cart);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    



    static async getAllCarts(req, res) {
        try {
            const carts = await ShoppingCartService.getAllCarts();
            res.status(200).send(carts);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getCartById(req, res) {
        try {
            const cartId = req.params.cartId;
            const cart = await ShoppingCartService.getCartById(cartId);
            res.status(200).send(cart);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteCartProduct(req, res) {
        try {
            const cartId = req.params.id;
            const productId = req.params.productId;
            const cart = await ShoppingCartService.deleteCartProduct(cartId, productId);
            res.status(200).send(cart);
        } catch (error) {
            res.status(400).jsend({ message: error.message });
        }
    }
}
