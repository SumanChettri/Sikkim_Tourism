# Sikkim Tourism - Complete Setup Guide

## 🚀 Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
```

### 2. Create Environment File
Create a `.env` file in the `backend` folder:
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sikkim_tourism
DB_PORT=3306
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000
BCRYPT_ROUNDS=12
```

### 3. Database Setup
1. Start XAMPP and start MySQL
2. Open phpMyAdmin (http://localhost/phpmyadmin)
3. Create a new database called `sikkim_tourism`
4. Import the `backend/database/sikkim_tourism.sql` file

### 4. Start Backend
```bash
cd backend
npm start
```

### 5. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## ✨ Features Implemented

### 🔐 Authentication System
- **User Registration** with photo upload
- **User Login** with JWT tokens
- **Protected Routes** with middleware
- **Photo Storage** in public/users directory

### 📝 Enhanced Signup Form
- Personal Information (name, email, phone, DOB, gender)
- Address Details (street, city, state, postal code)
- Travel Preferences (interests, travel style)
- Emergency Contact Information
- Profile Photo Upload (5MB limit, JPG/PNG/GIF)

### 🎨 Professional UI
- Modern gradient design
- Responsive layout
- Form validation with error messages
- Loading states and success feedback
- Photo preview functionality

### 🗄️ Database Schema
- Users table with all new fields
- User preferences for emergency contacts
- Destinations, tours, bookings, reviews
- Guides and guide bookings
- Proper foreign key relationships

## 🔧 Technical Details

### Backend Technologies
- Node.js + Express.js
- MySQL database with mysql2
- JWT authentication
- Multer for file uploads
- Express validation
- bcryptjs for password hashing

### Frontend Technologies
- React with hooks
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management
- Form validation and error handling

### File Upload
- Photos stored in `backend/public/users/`
- Accessible at `http://localhost:5000/users/filename`
- 5MB file size limit
- Image type validation

## 🧪 Testing

### Test Accounts
- **Admin**: admin@aiventurer.com / admin123
- **User**: john@example.com / user123

### API Endpoints
- `POST /api/auth/register` - User registration with photo
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - User logout (protected)

## 🚨 Important Notes

1. **Photo Uploads**: Make sure the `backend/public/users` directory exists
2. **Database**: Import the SQL file before starting the backend
3. **Environment**: Create the `.env` file with your database credentials
4. **Ports**: Backend runs on 5000, Frontend on 3000

## 🎯 Next Steps

1. Test the complete signup/login flow
2. Verify photo uploads work correctly
3. Check database entries are created properly
4. Test protected routes with authentication

## 🆘 Troubleshooting

- **Photo upload fails**: Check if `public/users` directory exists
- **Database connection error**: Verify XAMPP MySQL is running
- **Validation errors**: Check all required fields are filled
- **JWT errors**: Verify JWT_SECRET is set in .env file 