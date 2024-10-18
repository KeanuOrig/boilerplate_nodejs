import { Router } from 'express';
import passport from '../middleware/passport.js';
import { googleAuth, googleCallback } from '../controllers/authController.js';

const router = Router();

router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);

export default router;