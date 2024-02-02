import Hotel from "../models/hotel.js";

const createHotel = async (req, res) => {
    const hotel = new Hotel(req.body);
    try {
        const savedHotel = await hotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.json(error)
    }
}

const listHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json({ success: true, length: hotels.length, data: { hotels } })
    } catch (error) {
        res.json(error)
    }
}

const listHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.hotelId);
        res.status(200).json({ success: true, data: { hotel } })
    } catch (error) {
        res.json(error)
    }
}

const updateHotel = async (req, res) => {
    const id = req.params.hotelId;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, data: { updatedHotel } })
    } catch (error) {
        res.json(error)
    }

}

const deleteHotel = async (req, res) => {
    const id = req.params.hotelId;
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Hotel deleted.' })
    } catch (error) {
        res.json(error)
    }
}

export { createHotel, listHotels, listHotel, updateHotel, deleteHotel }