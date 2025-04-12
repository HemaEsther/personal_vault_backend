import express from "express"
import { login, signup, verifyUser, logout } from "../controllers/authController.js";



const router = express.Router();


router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);

router.get('/verify', verifyUser);
  


export default router;
