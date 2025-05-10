import express from 'express';
import {
  createVehicleRoute,
  getAllVehicleRoutes,
  getVehicleRouteById,
  updateVehicleRoute,
  deleteVehicleRoute,
} from '../controller/vehicleRouteController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/vehicleRoutes', authenticateToken, createVehicleRoute);
router.get('/vehicleRoutes', authenticateToken, getAllVehicleRoutes);
router.get('/vehicleRoutes/:id', authenticateToken, getVehicleRouteById);
router.put('/vehicleRoutes/:id', authenticateToken, updateVehicleRoute);
router.delete('/vehicleRoutes/:id', authenticateToken, deleteVehicleRoute);

export default router;
