import express from 'express';

const router = express.Router();
import { createHotel, listHotels, listHotel, updateHotel, deleteHotel, countByCities, countByType, featuredHotels } from '../hotel/hotel.js'
router.post('/hotel', createHotel)
router.get('/hotels', listHotels);
router.get('/hotel/:hotelId', listHotel);
router.put('/hotel/:hotelId', updateHotel);
router.delete('/hotel/:hotelId', deleteHotel);
router.get('/hotels/cities', countByCities);
router.get('/hotels/type', countByType);
router.get('/hotels/featured', featuredHotels);
export default router;