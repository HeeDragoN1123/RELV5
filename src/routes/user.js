import express from 'express';
import { UserController } from '../controllers/userController.js';
//import validate from '../middleware/validation.js';

const router = express.Router();
const userController = new UserController(); // 포스트 컨트롤러를 인스턴스 화 시킴

/* 회원가입 */
router.post('/signup',  userController.createUser);
//validate(userSchema),


/* 로그인 */
router.post('/login', userController.loginUser);

export default router;
