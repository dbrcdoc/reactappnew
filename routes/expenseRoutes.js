import express from 'express';
import multer from 'multer';
import {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  importExpenses,
  exportExpenses,
} from '../controller/expenseController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/expenses', createExpense);
router.get('/expenses', getAllExpenses);
router.get('/expenses/:id', getExpenseById);
router.put('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);

// Route for importing expenses from Excel file
router.post('/expenses/import', upload.single('file'), importExpenses);

// Route for exporting expenses to Excel file
router.get('/expenses/export', exportExpenses);

export default router;
