const mysql = require("mysql2");
require("dotenv").config(); // Load environment variables

// Debugging log to check if .env variables are loaded
console.log("DB Config:", process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed: " + err.message);
        return;
    }
    console.log("✅ Connected to MySQL database.");
});

module.exports = db;
