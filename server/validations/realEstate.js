
import { body } from 'express-validator';

export const createRealEstateValidator = [
  body('category', 'Category is required').isString().isLength({
    min: 2,
  }).withMessage('Category must be at least 2 characters'),
  body('type', 'Type is required').isString().isLength({
    min: 2,
  }).withMessage('Type must be at least 2 characters'),
  body('location', 'Location is required').isString().isLength({
    min: 2,
  }).withMessage('Location must be at least 2 characters'),
  body('amount', 'Amount is required').isNumeric().withMessage('Amount must be a number'),
  body('purchaseDate', 'Purchase date is required').isDate().withMessage('Purchase date must be a date'),
  body('position.x', 'Position x is required').isNumeric().withMessage('Position x must be a number'),
  body('position.y', 'Position y is required').isNumeric().withMessage('Position y must be a number'),
  body('image', 'Image is required'),
];
