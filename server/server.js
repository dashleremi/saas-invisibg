import 'dotenv/config'; // Ensure dotenv is used for environment variables
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js'; // Adjust paths
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

// app configuration
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database (without await here)
connectDB();

// initialize middlewares
app.use(express.json());
app.use(cors());

// API routes
app.get('/', (req, res) => res.send("API working"));
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// Serverless functions require export
export default app;  // Export the app for Vercel's Node.js runtime
