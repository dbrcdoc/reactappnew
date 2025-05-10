import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  signup,
  signin,
  getPasswordHash,
  blockUser,
  unblockUser,
} from '../controller/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

// Temporary debug route to get password hash by email
router.get('/debug/password-hash/:email', getPasswordHash);

router.post('/users', authenticateToken, createUser);
router.get('/users', authenticateToken, getUsers);
router.get('/users/:id', authenticateToken, getUserById);
router.put('/users/:id', authenticateToken, updateUser);
router.put('/users/:id/block', authenticateToken, blockUser);
router.put('/users/:id/unblock', authenticateToken, unblockUser);
router.delete('/users/:id', authenticateToken, deleteUser);

export default router;
