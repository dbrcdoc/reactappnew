import dotenv from 'dotenv';
dotenv.config();

if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET is not defined.');
  process.exit(1);
}

import express from 'express';
import { Sequelize } from 'sequelize';
import User from './model/userModel.js';
import VehicleRegistration from './model/vehicleRegistrationModel.js';
import vehicleRegistrationRoutes from './routes/vehicleRegistrationRoutes.js';
import renewalTypeRoutes from './routes/renewalTypeRoutes.js';
import RenewalType from './model/renewalTypeModel.js';
import renewalUpdateRoutes from './routes/renewalUpdateRoutes.js';
import RenewalUpdate from './model/renewalUpdateModel.js';
import vehicleRouteRoutes from './routes/vehicleRouteRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';

import VehicleRoute from './model/vehicleRouteModel.js';
import Expense from './model/expenseModel.js';

const app = express();
import cors from 'cors';
app.use(cors());
const port = process.env.PORT || 3001;

import userRoutes from './routes/userRoutes.js';

app.use(express.json());

// Setup Sequelize connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306,
  logging: false,
});

// Initialize User model
User.initModel(sequelize);
// Initialize VehicleRegistration model
VehicleRegistration.initModel(sequelize);
// Initialize RenewalType model
RenewalType.initModel(sequelize);
// Initialize RenewalUpdate model
RenewalUpdate.initModel(sequelize);
// Initialize VehicleRoute model
VehicleRoute.initModel(sequelize);
// Initialize Expense model
Expense.initModel(sequelize);

// Setup associations
const models = {
  User,
  VehicleRegistration,
  RenewalType,
  RenewalUpdate,
  VehicleRoute,
  Expense,
};

Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

// Test DB connection and sync models
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Sync models without force to avoid dropping tables
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully without force.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initializeDatabase();

app.use('/api', userRoutes);
app.use('/api', vehicleRegistrationRoutes);
app.use('/api', renewalTypeRoutes);
app.use('/api', renewalUpdateRoutes);

app.use('/api', vehicleRouteRoutes);
app.use('/api', expenseRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Node.js server with MySQL and Sequelize!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
