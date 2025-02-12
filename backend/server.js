require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Import the db.js file

const app = express();
app.use(express.json());
app.use(cors()); // Allows frontend to connect to backend

// API Route to Test Connection
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Import and use user routes
const usersRoutes = require("./routes/users");
app.use("/api/users", usersRoutes);

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
