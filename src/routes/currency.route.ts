import express, { Request, Response, NextFunction } from 'express';
import CurrenciesController from '@/controllers/currency/currencies.controller'

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await CurrenciesController();

        res.json(data);
    } catch (e) {
        res.json({error: 'error'});
    }
});

export default router;