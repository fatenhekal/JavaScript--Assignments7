
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/user.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Sticky Notes API is running"
  });
});

// API routes
app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
