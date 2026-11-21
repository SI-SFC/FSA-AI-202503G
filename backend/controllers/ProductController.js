import ProductModel from "../models/ProductModel.js";
import fs from "node:fs"

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

export const DeleteProduct = async (req,res)=>{
    const deleted = ProductModel.findByIdAndDelete(req.params.id)

    // fs.unlink(`../uploads/${deleted.image}`)

    if(!deleted){
        res.status(404).json({message:"Product Not Founded"})        
    }
    res.status(200).json({message:"Product Deleted Successfully",deleted})
}