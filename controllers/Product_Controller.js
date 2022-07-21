import mongoose from "mongoose";
import Products from "../models/Product_Model.js";

export const addProduct = async (req, res) => {
    try{
        const new_product = new Products(req.body);     // req.body contains data like Product_name: ABC, Product_price: 00
        const result = await new_product.save();
        return res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        return res.status(404).json({message: error.message})
    }
}

export const getProduct = async (req, res) => {
    const product_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(product_id))
        return res.status(404).send("Product not found....")

    try{
        const result = await Products.findById(product_id)
        return res.status(200).json(result);
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const deleteProduct = async(req, res) => {
    const product_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(product_id))
        return res.status(404).send("Product not found....")

    try{
        await Products.findByIdAndDelete(product_id);
        return res.status(200)
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const editProduct = async(req, res) => {
    const product_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(product_id))
        return res.status(404).send("Product not found....")

    try{
        await Products.findByIdAndUpdate(product_id, req.body)
        return res.status(200).json(await Products.findById(product_id));
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}