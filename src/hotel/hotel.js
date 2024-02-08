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
        const queryObj = { ...req.query };
        const exculdedFields = ["page", "sort", "limit", "fields"];
        exculdedFields.forEach(el => delete queryObj[el]);
        const query = Hotel.find(queryObj);
        const hotels = await query;
        res.status(200).json({ success: true, length: hotels.length, data: hotels })
    } catch (error) {
        res.json(error)
    }
}

const listHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.hotelId);
        res.status(200).json({ success: true, data: hotel })
    } catch (error) {
        res.json(error)
    }
}

const updateHotel = async (req, res) => {
    const id = req.params.hotelId;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, data: updatedHotel })
    } catch (error) {
        res.json(error)
    }

}

const deleteHotel = async (req, res) => {
    const id = req.params.hotelId;
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).json({ data: 'Hotel deleted.' })
    } catch (error) {
        res.json(error)
    }
}

const countByCities = async (req, res) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city });
        }))
        res.status(200).json({ data: list })
    } catch (error) {
        res.json(error)
    }
}

const countByType = async (req, res) => {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
    const villaCount = await Hotel.countDocuments({ type: 'villa' });
    const resortCount = await Hotel.countDocuments({ type: 'resort' });
    const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });
    res.status(200).json({
        data: [
            { type: 'hotel', count: hotelCount },
            { type: 'villa', count: villaCount },
            { type: 'resort', count: resortCount },
            { type: 'apartment', count: apartmentCount }

        ]
    })
}

const featuredHotels = async (req, res) => {
    try {

        const hotels = await Hotel.find(req.query)
        res.status(200).json({ success: true, length: hotels.length, data: hotels })
    } catch (error) {
        res.json(error)
    }
}

export { createHotel, listHotels, listHotel, updateHotel, deleteHotel, countByCities, countByType, featuredHotels }