import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connect from './src/config/db.js';
import hotelRoute from './src/routes/hotel.js';
import roomRoute from './src/routes/room.js';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/v1/api', hotelRoute);
app.use('/v1/api', roomRoute);

app.listen(process.env.PORT, () => {
    console.log('APP RUUNING AT PORT ', process.env.PORT);
    connect()
})