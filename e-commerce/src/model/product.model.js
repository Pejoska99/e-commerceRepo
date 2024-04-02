import { Schema, model } from "mongoose";
import { categories } from "../utill/constants.js";



const productSchema =  new Schema( {
    name: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: [true, "name is required"],
    },
    description: {
      
        type: String,
        minLength: 20,
        maxLength: 300,
        required: [true, "description is required"],
  },
    price: {
    type: Number,
    required: [true, "price is required"]
  },
    quantity: {
    type: Number,
    required:[true, "quantity is required "]   
  },
    category:{
    type:String,
    enum:categories,
    required: [true, " category is required"],
  },
   reviews:{
    type: [String],
    required: [true, " reviews is reqired"]

   },
   rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "rating is required"],
  }  
});

const Product = model("Product", productSchema);
export default Product;