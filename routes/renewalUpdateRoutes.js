import express from 'express';
import {
  createRenewalUpdate,
  getRenewalUpdates,
  getRenewalUpdateById,
  updateRenewalUpdate,
  deleteRenewalUpdate,
  downloadFile,
  upload,
} from '../controller/renewalUpdateController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/renewal-updates', authenticateToken, upload, createRenewalUpdate);
router.get('/renewal-updates', authenticateToken, getRenewalUpdates);
router.get('/renewal-updates/:id', authenticateToken, getRenewalUpdateById);
router.put('/renewal-updates/:id', authenticateToken, upload, updateRenewalUpdate);
router.delete('/renewal-updates/:id', authenticateToken, deleteRenewalUpdate);

// Route to download file and increment downloads count
router.get('/renewal-updates/:id/download', authenticateToken, downloadFile);

export default router;
