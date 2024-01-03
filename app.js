import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './api/routes/auth.js';
import userRoutes from './api/routes/users.js';
import hotelRoutes from './api/routes/hotels.js';
import roomRoutes from './api/routes/rooms.js';
import cookieParser from 'cookie-parser';
dotenv.config()


const app = express()
app.use(cookieParser());
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database.")
    } catch (error) {
        throw error
    }
}



app.use(express.json());
app.use('/v1/api', authRoutes);
app.use('/v1/api', userRoutes);
app.use('/v1/api', hotelRoutes);
app.use('/v1/api', roomRoutes);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || 'error'
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    })
})

app.listen(process.env.PORT, () => {
    connect()
    console.log('App running at port ', process.env.PORT);
})