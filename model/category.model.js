import { Sequelize,DataTypes } from "sequelize";
import sequelize  from "../db/dbConfig.js";
import Product from "./product.model.js";
const Category=sequelize.define("Category",
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:
        {
           type:DataTypes.STRING,
           allowNull:false,

        },
        description:
        {
            type:DataTypes.STRING,
            allowNull:true
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