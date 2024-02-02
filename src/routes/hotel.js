import express from 'express';

const router = express.Router();
import { createHotel, listHotels, listHotel, updateHotel, deleteHotel } from '../hotel/hotel.js'
router.post('/hotel', createHotel)
router.get('/hotels', listHotels);
router.get('/hotel/:hotelId', listHotel);
router.put('/hotel/:hotelId', updateHotel);
router.delete('/hotel/:hotelId', deleteHotel);
export default router;