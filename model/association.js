import Category from "./category.model.js";
import Product from "./product.model.js";
Category.hasMany(Product,{foreignKey:"categoryId"});
Product.belongsTo(Category,{foreignKey:"categoryId"});