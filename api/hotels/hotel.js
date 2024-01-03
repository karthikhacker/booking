import { createError } from '../utils/error.js';
import Hotel from '../models/hotels.js';

const createHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        const savedHotel = await hotel.save();
        res.status(201).json({ message: 'Success', savedHotel });
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteHotel = async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted hotel' });
    } catch (error) {
        res.status(500).json(error)
    }
}
const listHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) return next(createError(400, 'Hotel not found'))
        res.status(200).json(hotel);
    } catch (error) {
        next(error)
    }
}
const listHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
}

export { createHotel, updateHotel, deleteHotel, listHotel, listHotels };
