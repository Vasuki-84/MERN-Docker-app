const mongoose = require("mongoose");

const TasksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
  },
});
const tasks = new mongoose.model("tasks", TasksSchema);
module.exports = tasks;
