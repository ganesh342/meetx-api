import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import { bookActivity, getMyBookings } from '../controllers/bookingController.js';


const router = Router();

router.post('/', auth, bookActivity);

router.get('/', auth, getMyBookings);

export default router;
