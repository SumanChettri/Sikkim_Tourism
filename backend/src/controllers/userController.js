const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { executeQuery, executeTransaction } = require('../config/database');

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const users = await executeQuery(
      'SELECT id, first_name, last_name, email, phone, date_of_birth, gender, profile_picture, role, is_active, last_login, created_at FROM users WHERE id = ?',
      [req.user.userId]
    );
    
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const user = users[0];

    // Get user preferences
    const preferences = await executeQuery(
      'SELECT interests, travel_style, preferred_destinations FROM user_preferences WHERE user_id = ?',
      [user.id]
    );

    if (preferences.length > 0) {
      user.preferences = preferences[0];
    }

    res.json({
      success: true,
      data: {
        user
      }
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/user/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { firstName, lastName, phone, dateOfBirth, gender } = req.body;

    // Update user profile
    await executeQuery(
      'UPDATE users SET first_name = ?, last_name = ?, phone = ?, date_of_birth = ?, gender = ? WHERE id = ?',
      [firstName, lastName, phone, dateOfBirth, gender, req.user.userId]
    );

    // Get updated user data
    const [user] = await executeQuery(
      'SELECT id, first_name, last_name, email, phone, date_of_birth, gender, profile_picture, role, created_at FROM users WHERE id = ?',
      [req.user.userId]
    );

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        user
      }
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Update user preferences
// @route   PUT /api/user/preferences
// @access  Private
exports.updatePreferences = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { interests, travelStyle, preferredDestinations } = req.body;

    // Check if preferences exist
    const existingPreferences = await executeQuery(
      'SELECT id FROM user_preferences WHERE user_id = ?',
      [req.user.userId]
    );

    if (existingPreferences.length > 0) {
      // Update existing preferences
      await executeQuery(
        'UPDATE user_preferences SET interests = ?, travel_style = ?, preferred_destinations = ? WHERE user_id = ?',
        [JSON.stringify(interests), travelStyle, JSON.stringify(preferredDestinations), req.user.userId]
      );
    } else {
      // Create new preferences
      await executeQuery(
        'INSERT INTO user_preferences (user_id, interests, travel_style, preferred_destinations) VALUES (?, ?, ?, ?)',
        [req.user.userId, JSON.stringify(interests), travelStyle, JSON.stringify(preferredDestinations)]
      );
    }

    // Get updated preferences
    const [preferences] = await executeQuery(
      'SELECT interests, travel_style, preferred_destinations FROM user_preferences WHERE user_id = ?',
      [req.user.userId]
    );

    res.json({
      success: true,
      message: 'Preferences updated successfully',
      data: {
        preferences
      }
    });

  } catch (error) {
    console.error('Update preferences error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Update user password
// @route   PUT /api/user/password
// @access  Private
exports.updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password and new password are required'
      });
    }

    // Get current user with password
    const users = await executeQuery(
      'SELECT password FROM users WHERE id = ?',
      [req.user.userId]
    );
    
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, users[0].password);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    await executeQuery(
      'UPDATE users SET password = ? WHERE id = ?',
      [hashedPassword, req.user.userId]
    );

    res.json({
      success: true,
      message: 'Password updated successfully'
    });

  } catch (error) {
    console.error('Update password error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Delete user profile
// @route   DELETE /api/user/profile
// @access  Private
exports.deleteProfile = async (req, res) => {
  try {
    // Soft delete - set is_active to false
    await executeQuery(
      'UPDATE users SET is_active = FALSE WHERE id = ?',
      [req.user.userId]
    );

    res.json({
      success: true,
      message: 'Profile deleted successfully'
    });

  } catch (error) {
    console.error('Delete profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Get all users (Admin only)
// @route   GET /api/user/all
// @access  Private/Admin
exports.getAllUsers = async (req, res) => {
  try {
    const users = await executeQuery(
      'SELECT id, first_name, last_name, email, phone, role, is_active, created_at FROM users ORDER BY created_at DESC'
    );
    
    res.json({
      success: true,
      data: {
        users,
        count: users.length
      }
    });

  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Update user role (Admin only)
// @route   PUT /api/user/:userId/role
// @access  Private/Admin
exports.updateUserRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    if (!['user', 'admin', 'guide'].includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role'
      });
    }

    const result = await executeQuery(
      'UPDATE users SET role = ? WHERE id = ?',
      [role, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Get updated user
    const [user] = await executeQuery(
      'SELECT id, first_name, last_name, email, role FROM users WHERE id = ?',
      [userId]
    );

    res.json({
      success: true,
      message: 'User role updated successfully',
      data: {
        user
      }
    });

  } catch (error) {
    console.error('Update user role error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// @desc    Update user status (Admin only)
// @route   PUT /api/user/:userId/status
// @access  Private/Admin
exports.updateUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: 'isActive must be a boolean'
      });
    }

    const result = await executeQuery(
      'UPDATE users SET is_active = ? WHERE id = ?',
      [isActive, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Get updated user
    const [user] = await executeQuery(
      'SELECT id, first_name, last_name, email, is_active FROM users WHERE id = ?',
      [userId]
    );

    res.json({
      success: true,
      message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
      data: {
        user
      }
    });

  } catch (error) {
    console.error('Update user status error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}; 