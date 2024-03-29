import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String
    },
    roomNumbers: {
        type: [{ number: Number, unavailableDates: { type: [Date] } }]
    }
})

export default mongoose.model('Room', RoomSchema);