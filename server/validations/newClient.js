import { body } from 'express-validator';


export const addWaitUserValidator = [
  body('email', 'Email is required').isEmail().withMessage('Invalid email format'),
  body('name', 'Name is required').isString().isLength({
    min: 2,
  }).withMessage('Name must be at least 2 characters'),
];


export const contactValidator = [
  body('email', 'Email is required').isEmail().withMessage('Invalid email format'),
  body('fullName', 'Name is required').isString().isLength({
    min: 2,
  }).withMessage('Name must be at least 2 characters'),
];
