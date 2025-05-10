import express from 'express';
import {
  createRenewalType,
  getRenewalTypes,
  getRenewalTypeById,
  updateRenewalType,
  deleteRenewalType,
} from '../controller/renewalTypeController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/renewal-types', authenticateToken, createRenewalType);
router.get('/renewal-types', authenticateToken, getRenewalTypes);
router.get('/renewal-types/:id', authenticateToken, getRenewalTypeById);
router.put('/renewal-types/:id', authenticateToken, updateRenewalType);
router.delete('/renewal-types/:id', authenticateToken, deleteRenewalType);

export default router;
