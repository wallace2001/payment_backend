import { Router } from 'express';
const router = Router();

router.get('/', async(req, res) => {
    return res.send('Olá povinho');
});

export { router };