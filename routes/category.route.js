import express from "express";
import {saveInBulk,viewCategory,deleteCategory} from "../controller/category.controller.js";
const router=express.Router();
router.post("/save-in-Bulk",saveInBulk);
router.get("/view",viewCategory);
router.delete("/delete/:id",deleteCategory);
// router.put("/update/:id",updateCategory);
export default router;