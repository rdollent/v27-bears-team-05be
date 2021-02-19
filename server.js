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
<<<<<<< HEAD
app.use('/api/users', require('./routes/api/users'))
=======
app.use("/api/user", userRoutes);
>>>>>>> 681a00e7a38ccf1bc596289c172b47222b97aa45

// Error handling middleware to be used after routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.green));
