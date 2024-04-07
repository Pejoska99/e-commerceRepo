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
  
    
    // static async getAll(queryData) {
    //     console.log("Getting all products from service with query:", queryData); 
    //     let products = await Product.find(queryData || {});
    
    //     if (queryData) {
    //         if (queryData.category) {
    //             products = products.filter((product) => product.category === queryData.category);
    //         }
    
    //         if (queryData.name) {
    //             products = products.filter((product) => product.name.includes(queryData.name));
    //         }
    //     }
    
    //     console.log("Filtered products:", products); 
    //     return products;
    // }

    static async getAll(queryData) {
        console.log("Gettin all products from service with query:", queryData); 
        let products;
        if (queryData && (queryData.category || queryData.name)) {
            
            products = await Product.find(queryData);
        } else {
           
            products = await Product.find();
        }
        
        console.log("Filtered products:", products); 
        return products;
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