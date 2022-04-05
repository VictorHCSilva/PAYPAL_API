import {Router} from 'express';
import {
    createorder, 
    captureOrder, 
    cancelOrder, 
} from '../controllers/payment.controller';

const router = Router();

router.get("/create-order", createorder);

router.get("/capture-order", captureOrder);

router.get("/cancel-order", cancelOrder);

export default router