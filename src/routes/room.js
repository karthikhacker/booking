import express from 'express';
import { createRoom, deleteRoom, listRoom, listRooms, updateRoom } from '../room/room.js';

const router = express.Router();

router.post('/room/:hotelId', createRoom);
router.get('/rooms', listRooms);
router.get('/room/:roomId', listRoom);
router.put('/room/:roomId', updateRoom);
router.delete('/room/:roomId/:hotelId', deleteRoom);

export default router;