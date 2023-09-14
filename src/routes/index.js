import express from 'express';
import PostRouter from './post.js';
import UserRouter from './user.js';

const router = express.Router();

router.use('/posts/', PostRouter);
router.use('/', UserRouter);

export default router;
