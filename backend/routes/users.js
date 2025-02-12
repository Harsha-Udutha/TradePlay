const express = require("express");
const router = express.Router();
const db = require("../db"); // Ensure your db.js file is properly set up
const bcrypt = require("bcrypt");

// Test API
router.get("/test", (req, res) => {
    res.send("Users API is working!");
});

// **User Registration**
router.post("/register", async (req, res) => {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into MySQL database
        db.query(
            "INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)",
            [username, email, phone, hashedPassword],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Database error" });
                }
                res.json({ message: "User registered successfully!" });
            }
        );
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// **User Login**
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (results.length === 0) {
            return res.status(400).json({ error: "User not found" });
        }

        const user = results[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful!", user });
    });
});

module.exports = router;
