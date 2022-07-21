import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    Product_name: { type: String, required: true},
    Product_price: { type: Number, required: true}
})

export default mongoose.model('Product', productSchema)