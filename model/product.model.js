import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import Category from "./category.model.js";
import { title } from "process";

const product = sequelize.define('product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{ type:DataTypes.STRING},
    category:{ type:DataTypes.STRING},
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
    },
    discountPercentage:{ type:DataTypes.FLOAT},
    rating:{ type:DataTypes.FLOAT},
    stock:{ type:DataTypes.INTEGER},
    brand:{ type:DataTypes.STRING},
    warrantyInformation:{ type:DataTypes.STRING},
    shippingInformation:{ type:DataTypes.STRING},
    availabilityStatus:{type:DataTypes.STRING},
    thumbnail:{ type:DataTypes.STRING}
},{
    timestamps:false
}
);
sequelize.sync()
.then(()=>{
    console.log(" Product Table Created.......");
}).catch((err)=>{
    
    console.log(err);
});

export default product;