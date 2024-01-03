import express from 'express';

const router = express.Router();
import { createHotel, updateHotel, deleteHotel, listHotel, listHotels } from '../hotels/hotel.js'
import { authMiddleware, verifyAdmin } from '../middleware/authMiddleware.js';

router.post('/', verifyAdmin, createHotel);
router.put('/update/hotel/:id', verifyAdmin, updateHotel);
router.delete('/:id', verifyAdmin, deleteHotel);
router.get('/:id', listHotel);
router.get('/', listHotels);
export default router;