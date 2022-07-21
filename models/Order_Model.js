import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userid: { type: String, required: true},
    order_amount: { type: Number, required: true},
    order_products: [{
        product_id: String,
        product_price: Number
    }]
})

export default mongoose.model('Order', orderSchema)