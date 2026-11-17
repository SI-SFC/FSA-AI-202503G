import ProductModel from "../models/ProductModel.js";

export const CreateProduct = async (req,res)=>{
    const {name, price} = req.body;

    const newProduct = new ProductModel({
        name: name, 
        price: price, 
        image: req.file ? req.file.filename : null
    });
    await newProduct.save();
    res.status(201).json({message: "Product Created Successfully", product: newProduct});
}

export const GetProducts = async (req,res)=>{
    const products = await ProductModel.find();
    res.status(200).json(products);
}