import express, { Request, Response, NextFunction } from 'express';
import LanguagesController from '@/controllers/language/languages.controller'

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await LanguagesController();

        res.json(data);
    } catch (e) {
        res.json({error: 'error'});
    }
});

export default router;