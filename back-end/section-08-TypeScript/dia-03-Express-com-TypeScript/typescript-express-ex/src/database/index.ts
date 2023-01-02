const express =  require('express');
import userRoutes from './routes/userRouter';
import postsRouter from './routes/postsRouter';
import productsRouter from './routes/productsRouter';
import restaurantRouter from './routes/restaurantRouter';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', userRoutes);

app.use('/products', productsRouter);

app.use('/posts', postsRouter);

app.use('/restaurants', restaurantRouter);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});