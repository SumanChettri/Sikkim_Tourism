const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(auth);

// Validation rules
const updateProfileValidation = [
  body('firstName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First name can only contain letters and spaces'),
  
  body('lastName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Last name can only contain letters and spaces'),
  
  body('phone')
    .optional()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('dateOfBirth')
    .optional()
    .isISO8601()
    .withMessage('Please enter a valid date'),
  
  body('gender')
    .optional()
    .isIn(['male', 'female', 'other', 'prefer-not-to-say'])
    .withMessage('Please select a valid gender')
];

const updatePreferencesValidation = [
  body('interests')
    .optional()
    .isArray()
    .withMessage('Interests must be an array'),
  
  body('interests.*')
    .optional()
    .isIn(['adventure', 'culture', 'nature', 'spiritual', 'food', 'photography', 'trekking', 'wildlife'])
    .withMessage('Invalid interest type'),
  
  body('travelStyle')
    .optional()
    .isIn(['budget', 'comfort', 'luxury', 'backpacker'])
    .withMessage('Invalid travel style'),
  
  body('preferredDestinations')
    .optional()
    .isArray()
    .withMessage('Preferred destinations must be an array')
];

// User profile routes
router.get('/profile', userController.getProfile);
router.put('/profile', updateProfileValidation, userController.updateProfile);
router.put('/preferences', updatePreferencesValidation, userController.updatePreferences);
router.put('/password', userController.updatePassword);
router.delete('/profile', userController.deleteProfile);

// Admin routes (require admin role)
router.get('/all', requireRole(['admin']), userController.getAllUsers);
router.put('/:userId/role', requireRole(['admin']), userController.updateUserRole);
router.put('/:userId/status', requireRole(['admin']), userController.updateUserStatus);

module.exports = router; 