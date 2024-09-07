import { body } from 'express-validator';

export const createCarValidator = [
  body('name', 'Name is required').isString().isLength({
    min: 2,
  }).withMessage('Name must be at least 2 characters'),
  body('brand', 'Brand is required').isString().isLength({
    min: 2,
  }).withMessage('Brand must be at least 2 characters'),
  body('type', 'Type is required').isString().isLength({
    min: 2,
  }).withMessage('Type must be at least 2 characters'),
  body('variant', 'Variant is required').isString().isLength({
    min: 2,
  }).withMessage('Variant must be at least 2 characters'),
  body('purchaseDate', 'Purchase date is required').isDate().withMessage('Purchase date must be a date'),
  body('amount', 'Amount is required').isNumeric().withMessage('Amount must be a number'),
  body('position.x', 'Position x is required').isNumeric().withMessage('Position x must be a number'),
  body('position.y', 'Position y is required').isNumeric().withMessage('Position y must be a number'),
  body('type', 'Type is required'),
  body('image', 'Image is required'),
];
