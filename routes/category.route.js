import express from "express";
import {addCategory,viewCategory,deleteCategory,updateCategory} from "../controller/category.controller.js";
const router=express.Router();
router.post("/add",addCategory);
router.get("/view",viewCategory);
router.delete("/delete/:id",deleteCategory);
router.put("/update/:id",updateCategory);
export default router;