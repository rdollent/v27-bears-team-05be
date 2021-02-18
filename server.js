const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());

// Init middleware
app.use(express.json({ extended: false }));

// Test api route
app.get("/", (req, res) => res.send("API running"));

// Define routes
app.use("/api/user", userRoutes);

// Error handling middleware to be used after routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.green));
