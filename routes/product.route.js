import express from "express";
import{addProduct,viewProduct,deleteProduct,updateProdect} from "../controller/product.controller.js"
const router =express.Router();
router.post("/add",addProduct);
router.get("/view",viewProduct);
router.delete("/delete/:id",deleteProduct);
router.put("/update/:id",updateProdect);
export default router;
