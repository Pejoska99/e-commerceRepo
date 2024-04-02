import { Schema, model } from "mongoose";

const shoppingCartSchema = new Schema({
    products: [
        {
            type:Array,
            _id:"true",
            required:[true, " products is required"]
        }
    ]
});

const ShoppingCart = model("ShoppingCart", shoppingCartSchema);

export default ShoppingCart;



