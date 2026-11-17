import express from 'express';
import {
    CreateProduct,
    GetProducts
} from "../controllers/ProductController.js";
import upload from '../middlewares/upload.js';

const ProductRouter = express.Router();

ProductRouter.post("/product",upload.single('image'), CreateProduct);
ProductRouter.get("/product", GetProducts);

export default ProductRouter;