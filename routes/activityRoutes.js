import {Router} from 'express';

import { getAllActivities } from '../controllers/activityController.js';

const router = Router();
// GET /api/activities
router.get('/', getAllActivities);

export default router;
