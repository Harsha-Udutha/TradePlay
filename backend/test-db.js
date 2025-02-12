const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password',
    database: 'tradeplay',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database!");
    }
    connection.end();
});
