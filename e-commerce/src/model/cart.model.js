import { Schema, model } from "mongoose";

const shoppingCartSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

const ShoppingCart = model("ShoppingCart", shoppingCartSchema);

export default ShoppingCart;



