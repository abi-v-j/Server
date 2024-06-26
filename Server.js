import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import adminRoutes from './routes/admin.routes.js';
import logger from './utils/logger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);

// Database Connection and Server Start
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        logger.info('Database connected successfully');
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        logger.error('Database connection failed:', error);
    });

export default app;
