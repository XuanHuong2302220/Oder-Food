import express from 'express';
import { getFood, getAllFood, createFood, editFood , deleteFood } from '../controller/foodController.js';

export const foodRouter = express.Router();

foodRouter.get('/', getAllFood);
foodRouter.get('/:id/', getFood);
foodRouter.post('/', createFood);
foodRouter.put('/:id/', editFood);
foodRouter.delete('/:id/', deleteFood);