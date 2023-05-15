import express from 'express';
import { createUser, getAllAdmins, getUser, getUserById } from './user.controller';

const router=express.Router();

router.get('/',getUser);
router.get('/admins',getAllAdmins)
router.get('/:id',getUserById);
router.post('/create-user',createUser)

export default router;