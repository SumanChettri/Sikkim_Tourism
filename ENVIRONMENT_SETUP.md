# Environment Setup Guide

## Backend Environment Variables

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Copy the environment configuration:**
   ```bash
   copy env.config .env
   ```

3. **Edit the `.env` file** with your specific values:
   - **Database Password**: If you set a password for MySQL root user, update `DB_PASSWORD`
   - **JWT Secret**: Change `JWT_SECRET` to a strong, unique secret key
   - **Email Settings**: Update SMTP settings if you want password reset functionality

## Frontend Environment Variables

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Copy the environment configuration:**
   ```bash
   copy env.config .env
   ```

3. **Edit the `.env` file** with your specific values:
   - **API URL**: Update `VITE_API_BASE_URL` if your backend runs on a different port
   - **External Services**: Add API keys for Google Maps, Stripe, etc. if needed

## Important Notes

- **Never commit `.env` files** to version control
- **Keep your JWT secret secure** and unique for each environment
- **Update database credentials** if you're not using the default XAMPP setup
- **Frontend environment variables** must start with `VITE_` to be accessible in the browser

## Default Values

The default configuration assumes:
- Backend runs on port 5000
- Frontend runs on port 3000
- MySQL runs on localhost:3306 with root user (no password)
- Database name: `sikkim_tourism`

## Testing the Setup

After creating the `.env` files:

1. **Start the backend:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:5000/api/health
   ```

You should see: `{"status":"OK","message":"Sikkim Tourism API is running"}` 