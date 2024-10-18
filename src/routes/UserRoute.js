

import UserController from '../controllers/userController.js';
import { Router } from 'express';

const router = Router();

router.get("/all", UserController.getAllUsers);
router.put("/restore/:id", UserController.restore);
router.get("/:id", UserController.getById);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);
router.put("/restore/:id", UserController.restore);

export default router;