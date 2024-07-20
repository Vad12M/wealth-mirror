
import { body } from 'express-validator';

export const createRealEstateValidator = [
  body('location', 'Location is required').isString().isLength({
    min: 2,
  }).withMessage('Location must be at least 2 characters'),
  body('price', 'Price is required').isNumeric().withMessage('Price must be a number'),
  body('position.x', 'Position x is required').isNumeric().withMessage('Position x must be a number'),
  body('position.y', 'Position y is required').isNumeric().withMessage('Position y must be a number'),
  body('image', 'Image is required'),
];
