import express from 'express'
import { addProduct, getProduct, deleteProduct, editProduct } from '../controllers/Product_Controller.js';

const router = express.Router();

router.post('/create', addProduct)
router.get('/get/:id', getProduct);
router.delete('/delete/:id', deleteProduct);
router.patch('/edit/:id', editProduct);

export default router