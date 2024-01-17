import cors from 'cors';
import express from 'express';
import userRouter from './routes/user.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

export default app;