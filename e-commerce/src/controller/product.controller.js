// impllement controller for each route

import ProductService from "../services/product.service.js";

export default class ProductController {
    
    static async getProducts(req, res) {
        try {
            const queryData = {
                category: req.query.category,
                name: req.query.name

            };

         
            const products = await ProductService.getAll(queryData);
            res.send(products);
        } catch (error) {
            res.status(400).send({ message: error.message }); 
        }
    }

    static async getProduct (req, res){
        try {
            const productId = req.params.id;
            const product = await ProductService.getById(productId);
            res.send(product);
            
        } catch (error) {
            res.status(400).send({message: error.message});
            
        }
    }

    static async createProduct(req, res) {
        try {
            const productBody = req.body;
            const product = await ProductService.create(productBody);
            res.status(201).send(product);

        } catch (error) {
            res.status(400).send({message:error.message})
            
        }
    }

   static async updateProduct(req, res){
    try {
        const productId = req.params.id;
        const productBody = req.body;
        const product = await ProductService.update(productId, productBody);
        res.send(product);

    } catch (error) {
        res.status(400).send({message:error.message})

    }
   }

   static async deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        await ProductService.delete(productId);
        res.status(200).send({ message: "Product successfully deleted"})
        
    } catch (error) {
        res.status(400).send({ message: "Error deleting product", error: error.message });
        
    }

   }

   static async addReview(req, res) {
    try {
        const productId = req.params.id;
        const review = req.body.review;
        await ProductService.addReview(productId, review);
        res.status(200).send({message: "Review added successfully"})
    } catch (error) {
        res.status(400).send({ message: "Error adding review", error: error.message });
    }
   }

   static async addRating(req, res) {
   try {
    const productId = req.params.id;
    const rating = req.body.rating;
    await ProductService.addRating(productId,rating);
    res.status(200).send({ message: "Rating added successfully" });
     
   } catch (error) {
    res.status(400).send({ message: "Error adding rating", error: error.message });
   }
   }


}