import express from 'express';
import {
  createVehicleRegistration,
  getVehicleRegistrations,
  getVehicleRegistrationById,
  updateVehicleRegistration,
  deleteVehicleRegistration,
} from '../controller/vehicleRegistrationController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/vehicle-registrations', authenticateToken, createVehicleRegistration);
router.get('/vehicle-registrations', authenticateToken, getVehicleRegistrations);
router.get('/vehicle-registrations/:id', authenticateToken, getVehicleRegistrationById);
router.put('/vehicle-registrations/:id', authenticateToken, updateVehicleRegistration);
router.delete('/vehicle-registrations/:id', authenticateToken, deleteVehicleRegistration);

export default router;
