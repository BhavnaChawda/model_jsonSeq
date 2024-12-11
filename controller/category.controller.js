import { validationResult } from "express-validator";
import express, { response } from "express";
import Category from "../model/category.model.js";
import bcrypt from "bcryptjs";
import { request } from "https";
import { error } from "console";
import { where } from "sequelize";
export const addCategory=async(request,response,next)=>
{
    try{
         const {name,description}=request.body;
         const newCategory= await Category.create({
            name,description,
         });
         return response.status(201).json({message:"categrory added succesfully",Category:newCategory});   
    }
    catch(err)
    {
        return response.status(500).json({error:"internal error"})
    }
};

export const viewCategory=async(request,response,next)=>
{
    try{
        const categories=await Category.findAll({raw:true});
        console.log(categories);
        return response.status(200).json({categories});

    }catch(err)
    {
        return response.status(500).json({error:"internal server error"})
    }
};



export const deleteCategory = async (request, response, next) => {
    // console.log("hii......")
    try {
        let { id } = request.params;
        let result = await Category.destroy({ where: { id } });
        if (result) {
            return response.status(200).json({ message: "category deleted success" })
        } else {
            return response.status(404).json({ error: "category not found" })
        }
    } catch (err) {
        console.log(err);
        return response.status(401).json({ error: "delete server error" })
    }
};


export const updateCategory=async(request,response,next)=>
{
    try{
        let {id}=request.params;
        let{name,description}=request.body;
        await Category.update({name,description},{where:{id}});
            return response.status(201).json({message:"update category success"});
    }
    catch(err){
     return response.status(401).json({error:"update server error"});
    }
};