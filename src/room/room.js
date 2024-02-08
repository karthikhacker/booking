import Room from '../models/room.js';
import Hotel from '../models/hotel.js';

export const createRoom = async (req, res) => {
    const room = new Room(req.body);
    const hotelId = req.params.hotelId;

    try {
        const savedRoom = await room.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
            res.status(201).json(savedRoom);
        } catch (error) {
            res.json(error)
        }
    } catch (error) {
        res.json(error)
    }
}

export const listRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({ success: true, length: rooms.length, data: { rooms } })
    } catch (error) {
        res.json(error)
    }
}

export const listRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        res.status(200).json({ success: true, data: { room } })
    } catch (error) {
        res.json(error)
    }
}

export const updateRoom = async (req, res) => {
    const id = req.params.roomId;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, data: { updatedRoom } })
    } catch (error) {
        res.json(error)
    }

}

export const deleteRoom = async (req, res) => {
    const id = req.params.roomId;
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.roomId } });
        } catch (error) {
            res.json(error)
        }
        res.status(200).json({ message: 'Room deleted.' })
    } catch (error) {
        res.json(error)
    }
}

