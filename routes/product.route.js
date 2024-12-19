import express from "express";
import{saveInBulk,viewProduct,deleteProduct} from "../controller/product.controller.js"
const router =express.Router();
router.post("/save-in-bulk",saveInBulk);
router.get("/view",viewProduct);
router.delete("/delete/:id",deleteProduct);
// router.put("/update/:id",updateProdect);
export default router;
