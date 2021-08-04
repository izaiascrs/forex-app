import { Router } from 'express';

import forexRouter from './forex';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello from router');
});

router.use('/forex', forexRouter);

export default router;
