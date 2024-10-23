import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import 'dotenv/config';  // This loads environment variables from .env


const app = express();
const PORT = process.env.PORT || 4000;

// Allow CORS requests from both localhost (for development) and your production domain
const corsOptions = {
  origin: [
    'http://localhost:4000',  
    'https://invisibg.vercel.app'  
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
  credentials: true  // Allow cookies and credentials
};

app.use(cors({
    origin: 'http://localhost:3000',  // Your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));

app.use(express.json());

// Connect to the database
await connectDB();

// API routes
app.get('/', (req, res) => res.send('API working'));
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
