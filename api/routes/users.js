import express from 'express';

const router = express.Router();
import { updateUser, deleteUser, listUser, listUsers } from '../users/users.js';
import { authMiddleware, verifyAdmin } from '../middleware/authMiddleware.js';

router.put('/user', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
router.get('/:id', authMiddleware, listUser);
router.get('/', verifyAdmin, listUsers);
export default router;