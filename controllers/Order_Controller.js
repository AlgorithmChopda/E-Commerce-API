import mongoose from "mongoose";
import Products from "../models/Product_Model.js";
import Orders from '../models/Order_Model.js';

export const addOrder = async (req, res) => {
    try{
        const new_order = new Orders(req.body);  
        const result = await new_order.save();
        return res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        return res.status(404).json({message: error.message})
    }
}

export const getOrder = async (req, res) => {
    const order_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(order_id))
        return res.status(404).send("Order not found....")

    try{
        const result = await Orders.findById(order_id)
        return res.status(200).json(result);
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const deleteOrder = async(req, res) => {
    const order_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(order_id))
        return res.status(404).send("Order not found....")

    try{
        await Orders.findByIdAndDelete(order_id);
        return res.status(200)
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const editOrder = async(req, res) => {
    const order_id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(order_id))
        return res.status(404).send("Order not found....")

    try{
        await Orders.findByIdAndUpdate(order_id, req.body)
        return res.status(200).json(await Orders.findById(order_id));
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}