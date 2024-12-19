import { Sequelize,DataTypes } from "sequelize";
import sequelize  from "../db/dbConfig.js";
import Product from "./product.model.js";
const Category=sequelize.define("Category",
    {
        slug:
        {
            type:DataTypes.STRING, 
        },
        name:
        {
           type:DataTypes.STRING,
        },
         url:
        {
            type:DataTypes.STRING,
            allowNull:false,
        },

    });
    // Category.hasMany(Product,{foreignKey:"categortId"});
    sequelize.sync()
    .then(()=>
    {
        console.log("Category table create");

    }).catch(err=>
    {
        console.log(err)
    });
    export default Category;