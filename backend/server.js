const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
const protect = require("./middleware/authMiddleware");

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});