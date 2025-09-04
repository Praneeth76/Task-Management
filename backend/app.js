require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const mentorRoutes = require("./routes/mentorRoutes");
const courseRoutes = require("./routes/courseRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // change to your frontend URL when deployed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api", mentorRoutes);
app.use("/api", courseRoutes);

// Error handler
app.use(errorHandler);

// Start server after DB connects
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}...`);
  });
});
