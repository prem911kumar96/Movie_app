import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRoutes from './routes/movie.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
