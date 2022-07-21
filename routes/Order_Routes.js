import express from 'express'
import { addOrder, getOrder, deleteOrder, editOrder } from '../controllers/Order_Controller.js';

const router = express.Router();

router.post('/add', addOrder)
router.get('/get/:id', getOrder)
router.delete('/delete/:id', deleteOrder)
router.patch('/edit/:id', editOrder);


export default router;