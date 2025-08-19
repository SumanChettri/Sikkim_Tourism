const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sikkim_tourism',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database successfully');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ MySQL connection error:', error.message);
    return false;
  }
};

// Initialize database tables
const initializeDatabase = async () => {
  try {
    const connection = await pool.getConnection();
    
    // Check if tables exist
    const [tables] = await connection.execute(`
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = '${dbConfig.database}'
    `);
    
    if (tables.length === 0) {
      console.log('📋 Database tables not found. Please import the SQL file into phpMyAdmin.');
    } else {
      console.log(`📋 Found ${tables.length} tables in database`);
    }
    
    connection.release();
  } catch (error) {
    console.error('❌ Database initialization error:', error.message);
  }
};

// Get connection from pool
const getConnection = async () => {
  try {
    return await pool.getConnection();
  } catch (error) {
    console.error('❌ Error getting database connection:', error.message);
    throw error;
  }
};

// Execute query with parameters
const executeQuery = async (query, params = []) => {
  try {
    const [rows] = await pool.execute(query, params);
    return rows;
  } catch (error) {
    console.error('❌ Query execution error:', error.message);
    throw error;
  }
};

// Execute transaction
const executeTransaction = async (queries) => {
  const connection = await getConnection();
  
  try {
    await connection.beginTransaction();
    
    const results = [];
    for (const { query, params = [] } of queries) {
      const [result] = await connection.execute(query, params);
      results.push(result);
    }
    
    await connection.commit();
    connection.release();
    return results;
  } catch (error) {
    await connection.rollback();
    connection.release();
    throw error;
  }
};

module.exports = {
  pool,
  testConnection,
  initializeDatabase,
  getConnection,
  executeQuery,
  executeTransaction
}; 