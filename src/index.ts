// src/server.ts
import express from 'express';
const connectDB = require('./db');
import eventRouter from './events/event-router';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use event routes
app.use('/api/v1', eventRouter); // Note the prefix '/api'

const startServer = async () => {
    try {
        await connectDB(); // Ensure database connection is established
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start the server:', err);
    }
};

startServer();
