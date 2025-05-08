import { Router } from 'express';
import { register, login} from '../controllers/authController.js';

// POST /api/auth/register
const router = Router();

router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

export default router;
