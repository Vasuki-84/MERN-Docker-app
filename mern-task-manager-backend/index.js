const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const dbconnection = require("./config/dbconnection.config");
const tasksRoutes = require("./routes/Task.route");
const userRoutes = require("./routes/User.route");

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
dbconnection();

// Routes
app.use("/tasks", tasksRoutes);
app.use("/user", userRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
