import { Schema, model } from "mongoose";


const shoppingCartSchema = new Schema({
    products: [{ type: Schema.Types.ObjectId, 
        ref: 'Product' }] 
});

const ShoppingCart = model("carts", shoppingCartSchema);

export default ShoppingCart;




