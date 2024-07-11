import { body } from 'express-validator';

export const createCardValidator = [
  body('name', 'Name is required').isString().isLength({
    min: 2,
  }).withMessage('Name must be at least 2 characters'),
  body('amount', 'Price is required').isNumeric().withMessage('Price must be a number'),
  body('position.x', 'Position x is required').isNumeric().withMessage('Position x must be a number'),
  body('position.y', 'Position y is required').isNumeric().withMessage('Position y must be a number'),
];
