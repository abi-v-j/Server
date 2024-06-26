import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import adminRoutes from './routes/admin.routes.js';
import logger from './utils/logger.js';
import path from 'path'; // Node.js path module
import { fileURLToPath } from 'url'; // Node.js URL module

import fs from 'fs';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Get current directory path
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' directory
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// Routes
app.use("/admin", adminRoutes);


// Error handling middleware

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
