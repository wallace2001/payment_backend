import { Router } from 'express';
import { PaymentService } from './service/PaymentService';
const router = Router();
const paymentService = new PaymentService();

router.get('/payment/:id/:email/:description/:amount', paymentService.store);

export { router };