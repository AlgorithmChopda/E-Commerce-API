import express from 'express'
import { createCustomer, getCustomer, deleteCustomer, editCustomer } from '../controllers/Customer_Controller.js';
const router = express.Router();

router.post('/create', createCustomer)
router.get('/get/:id', getCustomer)
router.patch('/Edit/:id', editCustomer)
router.delete('/delete/:id', deleteCustomer)

export default router