import express from 'express';
import { getUser, getAllUser, createUser, editUser, deleteUser } from '../controller/userController.js';

export const userRouter = express.Router();

userRouter.get('/', getAllUser);
userRouter.get('/:id/', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id/', editUser);
userRouter.delete('/:id/', deleteUser);