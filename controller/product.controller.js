import { Result, validationResult } from "express-validator";
import product from "../model/product.model.js";
import bcrypt from "bcryptjs";
import { request } from "http";
import { response } from "express";
import { error, log } from "console";
import Category from "../model/category.model.js";
import Product from "../model/product.model.js";
import { where } from "sequelize";
export const addProduct = async (request, response, next) => {
    try {
        const { name, price, description, categoryId } = request.body;
        console.log(request.body)
        const newProduct = await product.create({
            name, price, description, categoryId
        });
        return response.status(201).json({ message: "product added succesfull", product: newProduct });

    }
    catch (err) {
        console.log("error in addproduct", err)
        return response.status(500).json({ error: "internal error" });
    }
};

export const viewProduct = async (request, response, next) => {
    try {

        const products = await product.findAll({ raw: true });
        console.log(products);
        return response.status(200).json({ products });

    }
    catch (err) {
        console.log(err);

        return response.status(500).json({ error: "internal server error" })
    }
}

export const deleteProduct = async (request, response, next) => {
    // console.log("hii......")
    try {
        let { id } = request.params;
        let result = await Product.destroy({ where: { id } });
        if (result) {
            return response.status(200).json({ message: "product deleted success" })
        } else {
            return response.status(404).json({ error: "product not found" })
        }
    } catch (err) {
        console.log(err);
        return response.status(401).json({ error: "delete server error" })
    }
};

export const updateProdect =async(request,response,next)=>
{
    try{
        let {id}=request.params;
        let {name ,price,description}=request.body;
        await Product.update({name,price,description},{where:{id}});
            return response.status(201).json({message:"update product success"})
    }
        
    catch(err)
    {
        return response.status(401).json({error:"update server error"})
    }
};