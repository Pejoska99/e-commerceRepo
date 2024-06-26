import ShoppingCart from "../model/cart.model.js";
import Product from "../model/product.model.js";


export default class ShoppingCartService {
    static async addToCart(cartId, productId) {
        let cart = await ShoppingCart.findById(cartId);
        if (!cart) {
            cart = new ShoppingCart();
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }

        await product.save();

        cart.products.push(product._id);
        await cart.save();

        return cart;
    }

    static async getAllCarts() {
        const carts = await ShoppingCart.find().populate('products');
        return carts;
    }

    static async getCartById(cartId) {
        const cart = await ShoppingCart.findById(cartId).populate('products');
        if (!cart) {
            throw new Error("Cart not found");
        }
        return cart;
    }

    static async deleteCartProduct(cartId, productId) {
        const cart = await ShoppingCart.findById(cartId);
        if (!cart) {
            throw new Error("Cart not found");
        }
        cart.products = cart.products.filter(product => product.toString() !== productId.toString());
        await cart.save();
        return cart;
    }

    static async deleteCart(cartId) {
        const cart = await ShoppingCart.findByIdAndDelete(cartId);
        if (!cart) {
            throw new Error("Cart not found");
        }

        return cart;
    }
}
