import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import notFound from './middlewares/notFound';
import errorHandler from './middlewares/ErrorHandler';
import api from './api';

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
