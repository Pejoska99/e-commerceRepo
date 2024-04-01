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
    static async getAll(){
        const data = await Product.find({});
        console.log(data);
        return data;
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

    // static async searchByCategory(category) {
    //     const searchQuery = {};
    //     if (category) searchQuery.category = category;
    //     return await Product.find(searchQuery);
    // }

 
    
}