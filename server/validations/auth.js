import { body } from 'express-validator';

export const registerValidator = [
  body('email', 'Email is required').isEmail().withMessage('Invalid email format'),
  body('password', 'Password is required').isLength({
    min: 8,
    max: 16
  }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>ยง?|]).{8,16}$/).withMessage('Password must be 8-16 characters, including at least 1 number, 1 lowercase letter, 1 uppercase letter, and 1 special character'),
  body('firstName', 'First name is required').isString().isLength({
    min: 2,
  }).withMessage('First name must be at least 2 characters'),
  body('lastName', 'Last name is required').isString().isLength({
    min: 2,
  }).withMessage('Last name must be at least 2 characters'),
  body('phone', 'Phone number is required').isMobilePhone().withMessage('Invalid phone number format'),
];


export const loginValidator = [
  body('email', 'Email is required').isEmail().withMessage('Wrong email'),
  body('password', 'Password is required').isLength({
    min: 3,
    max: 32
  }).withMessage('Password must be between 3 and 32 characters'),
];

export const updateMeValidator = [
  body('email', 'Email is required').isEmail().withMessage('Invalid email format'),
  body('firstName', 'First name is required').isString().isLength({
    min: 2,
  }).withMessage('First name must be at least 2 characters'),
  body('lastName', 'Last name is required').isString().isLength({
    min: 2,
  }).withMessage('Last name must be at least 2 characters'),
  body('phone', 'Phone number is required').isMobilePhone().withMessage('Invalid phone number format'),
];

