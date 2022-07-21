import mongoose from "mongoose";
import Customers from "../models/Customer_Model.js";
import Orders from '../models/Order_Model.js'

export const createCustomer = async (req, res) => {
    try{
        const new_customer = new Customers(req.body);
        const result = await new_customer.save();
        return res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        return res.status(404).json({message: error.message})
    }
}

export const getCustomer = async (req, res) => {
    const customer_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(customer_id))
        return res.status(404).send("Customer not found....")

    try{
        const result = await Customers.findById(customer_id)
        return res.status(200).json(result);
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const deleteCustomer = async(req, res) => {
    const customer_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(customer_id))
        return res.status(404).send("Customer not found....")

    try{
        await Customers.findByIdAndDelete(customer_id);

        // when a customer is deleted all its order should be deleted....
        await Orders.deleteMany({userid: customer_id});
        return res.status(200).json("deleted");
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

export const editCustomer = async(req, res) => {
    const customer_id = req.params.id;

    if( !mongoose.Types.ObjectId.isValid(customer_id))
        return res.status(404).send("Customer not found....")

    try{
        await Customers.findByIdAndUpdate(customer_id, req.body)
        return res.status(200).json(await Customers.findById(customer_id));
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}