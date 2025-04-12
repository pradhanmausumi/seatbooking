// backend/routes/seatRoutes.js
import express from 'express';
import { getSeats, bookSeats, resetSeats } from '../controllers/seatController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getSeats);
router.post('/book', authMiddleware, bookSeats);
router.post('/reset', authMiddleware, resetSeats);

export default router;
