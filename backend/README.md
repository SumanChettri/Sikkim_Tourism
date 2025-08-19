# Sikkim Tourism Backend API

A robust Node.js backend API for the Sikkim Tourism platform, featuring user authentication, profile management, and secure endpoints.

## 🚀 Features

- **User Authentication**: JWT-based login/signup system
- **Profile Management**: Complete user profile CRUD operations
- **Security**: Password hashing, rate limiting, and CORS protection
- **Validation**: Input validation with express-validator
- **Database**: MongoDB with Mongoose ODM
- **Middleware**: Custom authentication and role-based access control

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   ├── utils/          # Utility functions
│   └── server.js       # Main server file
├── package.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment file
   cp .env.example .env
   
   # Edit .env with your configuration
   nano .env
   ```

4. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update `MONGODB_URI` in your `.env` file

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 🔧 Configuration

### Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/sikkim-tourism

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/auth/register` | User registration | Public |
| POST | `/api/auth/login` | User login | Public |
| GET | `/api/auth/me` | Get current user | Private |
| POST | `/api/auth/logout` | User logout | Private |
| POST | `/api/auth/refresh` | Refresh token | Private |
| POST | `/api/auth/forgot-password` | Forgot password | Public |
| POST | `/api/auth/reset-password` | Reset password | Public |

### User Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/user/profile` | Get user profile | Private |
| PUT | `/api/user/profile` | Update user profile | Private |
| PUT | `/api/user/preferences` | Update preferences | Private |
| PUT | `/api/user/password` | Update password | Private |
| DELETE | `/api/user/profile` | Delete profile | Private |
| GET | `/api/user/all` | Get all users | Admin |
| PUT | `/api/user/:userId/role` | Update user role | Admin |
| PUT | `/api/user/:userId/status` | Update user status | Admin |

## 🔐 Authentication

### JWT Token Format
```
Authorization: Bearer <token>
```

### Token Expiration
- Access Token: 7 days
- Refresh Token: Available via `/api/auth/refresh`

## 🛡️ Security Features

- **Password Hashing**: bcrypt with 12 salt rounds
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Protection**: Configurable origin restrictions
- **Input Validation**: Comprehensive validation with express-validator
- **Helmet**: Security headers middleware
- **JWT Verification**: Token validation and expiration handling

## 🗄️ Database Models

### User Model
- Personal information (name, email, phone)
- Authentication (password, tokens)
- Preferences (interests, travel style)
- Role-based access control
- Profile completion tracking

## 🚦 Middleware

### Authentication Middleware
- `auth`: Required authentication for protected routes
- `optionalAuth`: Optional authentication for public routes
- `requireRole`: Role-based access control

## 📊 Validation Rules

### Registration
- First/Last name: 2-50 characters, letters only
- Email: Valid email format
- Password: Minimum 8 characters, mixed case, numbers, symbols
- Phone: Optional, valid phone format

### Login
- Email: Valid email format
- Password: Required

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET`
- [ ] Configure production MongoDB URI
- [ ] Set up proper CORS origins
- [ ] Enable rate limiting
- [ ] Set up logging and monitoring

### Docker Deployment
```bash
# Build image
docker build -t sikkim-tourism-backend .

# Run container
docker run -p 5000:5000 sikkim-tourism-backend
```

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    // Validation errors
  ]
}
```

## 🔍 Health Check

```bash
GET /api/health
```

Response:
```json
{
  "status": "OK",
  "message": "Sikkim Tourism API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

Stay updated with the latest changes:
- Watch the repository
- Check the changelog
- Follow the development blog 