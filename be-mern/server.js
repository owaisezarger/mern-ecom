const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const cardRoutes = require("./routes/cardRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/user", authRoutes);
app.use("/card", cardRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL);

// Simple test route
app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
