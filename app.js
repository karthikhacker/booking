import express from 'express';
import 'dotenv/config'
import connect from './src/config/db.js';
import hotelRoute from './src/routes/hotel.js';

const app = express();

app.use(express.json());

app.use('/v1/api', hotelRoute);
app.listen(process.env.PORT, () => {
    console.log('APP RUUNING AT PORT ', process.env.PORT);
    connect()
})