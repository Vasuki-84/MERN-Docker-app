const taskModel = require("../models/task.model");

// POST api
const createTasks = async (req, res) => {
  const { title, description, status, priority } = req.body;
  try {
    if (!title || !description || !status || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newTasks = new taskModel({ title, description, status, priority });
    await newTasks.save();
    res.status(201).json({ message: "New task added" });
  } catch (err) {
    res.status(500).json({ message: "Tasks not added" });
  }
};

// GET all Tasks api
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Tasks Fetching failed" });
  }
};

// GET tasks BY ID api
const getTasksById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskModel.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: "Task fetching failure" });
  }
};

// PUT api
const updateTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const updateTask = await taskModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Task updated" });
  } catch (err) {
    res.status(500).json({ message: "Task updation failure" });
  }
};

// DELETE api
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await taskModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Task deletion failed" });
  }
};

module.exports = {
  createTasks,
  getAllTasks,
  getTasksById,
  updateTasks,
  deleteTask,
};
