import express from 'express';
import cors from 'cors';

import router from './routes';
import authMiddleware from './middlewares/auth';

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use(router);

app.listen(3333);