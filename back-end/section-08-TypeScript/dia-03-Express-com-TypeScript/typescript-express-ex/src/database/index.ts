const express =  require('express');
import userRoutes from './routes/userRouter';
import postsRouter from './routes/postsRouter';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', userRoutes);

app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});