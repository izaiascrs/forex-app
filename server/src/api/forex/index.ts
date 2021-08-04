import { Router } from 'express';
import { getQuotation } from '../../controllers/forexController';

const router = Router();

router.get('/', getQuotation);

export default router;
