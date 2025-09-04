const express = require("express");
const cors = require("cors");

const app = express();
const mentorRoutes = require("./routes/mentorRoutes");
const courseRoutes = require("./routes/courseRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(
  cors({
    origin: "http://localhost:5173", // change to your frontend URL on Render
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", mentorRoutes);
app.use("/api", courseRoutes);

app.use(errorHandler);

module.exports = app;
