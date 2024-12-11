import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import Category from "./category.model.js";

const Product=sequelize.define('Product',
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:
        {
            type:DataTypes.FLOAT,
            allowNull:false
        },
        description:
        {
            type:DataTypes.STRING,
            allowNull:true
        },
        categoryId:
        {
            type:DataTypes.INTEGER,
            references:
            {
                model:Category,
                key:'id',
            },
            allowNull:false 
        },
    });

    // Product.belongsTo(Category,{foreignKey:"categoryId"});
    sequelize.sync()
    .then(()=>
    {
        console.log("Product table create");

    }).catch(err=>
    {
        console.log(err)
    });
    export default Product;