import { createError } from '../utils/error.js';
import User from '../models/user.js';



const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted user' });
    } catch (error) {
        res.status(500).json(error)
    }
}
const listUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return next(createError(400, 'User not found'))
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}
const listUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}

export { updateUser, deleteUser, listUser, listUsers };
