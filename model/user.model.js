import { DataTypes } from "sequelize";
import Sequelize from "../db/dbConfig.js";
import { type } from "os";

const user = Sequelize.define("user",
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
        password:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
        email:
        {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        contact:
        {
            type:DataTypes.BIGINT
        }
    });

    Sequelize.sync()
    .then(()=>
    {
        console.log("user table created..");
    }).catch(err=>
    {
        console.log(err);
    });
    export default user;