import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema ({
    // mmongoose unique Id's are created automatically. 
    Customer_firstname: { type: String, required: true},
    Customer_lastname: { type: String, required: true},
    Customer_city: { type: String, required: true},
    Customer_country: { type: String, required: true},
    Customer_phone: { type: Number, required: true},
    Customer_email: { type: String, required: true},
})


export default mongoose.model("Customer", CustomerSchema)
