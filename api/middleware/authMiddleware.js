import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, 'Your not authorized'));
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) next(createError(403, 'Token invalid'))
        console.log(user);
        req.user = user;
        next()
    })
}

export const verifyAdmin = (req, res, next) => {
    authMiddleware(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, 'You are not authorized.'));
        }
    })
}