// crud implement 
// get all
//get product by id
// create product
//update product'
//delete product


// 2 del 
// implement filtering by category(mandatory) and name 
// implement adding review (short-text)
// implement adding rating (1-10)

//posebni metodi vo service


//implment logic for adding product to cart

import Product from "../model/product.model.js";

export default class ProductService {
    // static async getAll(){
    //     const data = await Product.find({});
    //     console.log(data);
    //     return data;
    // }
    
    static async getAll(queryData) {
        console.log("Getting all products from service");
        let products =  await Product.find();
    

    if(queryData) {
        if (queryData.category === "true") {
            products = products.filter(product => product.category === true);
        }

        if (queryData.name === "true") {
            products = products.filter(product => product.name.includes(queryData.name));

        }
    }
      return products

    }
    static async getById(id) {
        const product = await Product.findById(id);
        console.log(product);
        return product
    }

    static async create(body) {
        return await Product.create(body);
    }

    static async update(id, body) {
        let product = await Product.findById(id);
        const updateDate = { ...product, ...body};
        product.set(updateDate);
        await product.save();
        return product
    }

    static async delete(id) {
        return await Product.findByIdAndDelete(id)
    }

    static async addReview(id, review) {
        const product = await Product.findById(id);
       product.reviews.push(review);
       await product.save();
       return product
    }

    static async addRating(id,rating) {
        const product = await Product.findById(id);
        product.rating = rating;
        return await product.save();


    }

    

 
    
}