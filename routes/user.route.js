import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";
import { body } from "express-validator";
  
const router = express.Router();
router.post("/sign-up",
    body("username","username is required").notEmpty(),
    body("email","email id is required").notEmpty(),
    body("email","Not a valid email id").isEmail(),
    body("password","password is required").notEmpty(),
    body("password","password must be between 6 to 10").isLength({min:6, max:10}),
    body("contact","Only digits are allowed").isNumeric(),signUp);

    router.post("/sign-in",signIn);
    export default router;
