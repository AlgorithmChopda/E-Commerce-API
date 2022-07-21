import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import Customer_Routes from './routes/Customer_Routes.js'
import Product_Routes from './routes/Product_Routes.js'
import Order_Routes from './routes/Order_Routes.js'
const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/Customer', Customer_Routes)
app.use('/Product', Product_Routes)
app.use('/Order', Order_Routes)

app.get('/', (req, res) => {
    res.send("API working")
})

const PORT = process.env.PORT || 5000
const DATABASE_URL =  "mongodb+srv://admin:admin@e-commerce-api.lfrw0af.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))