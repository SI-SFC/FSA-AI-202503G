import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

const ProductModel = mongoose.model("Product",ProductSchema);

export default ProductModel;