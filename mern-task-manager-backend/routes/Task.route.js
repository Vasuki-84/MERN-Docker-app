const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  getTasksById,
  updateTasks,
  deleteTask,
} = require("../controllers/Task.controller");

const authMiddleware = require("../middleware/auth.middleware");

// http://localhost:8081/tasks/create
router.post("/create", authMiddleware(["admin"]), createTasks);

// http://localhost:8081/tasks
router.get("/", getAllTasks);

//  http://localhost:8081/tasks/<id>
router.get("/:id", getTasksById);

//  http://localhost:8081/tasks/update/<id>
router.put("/update/:id", authMiddleware(["admin"]), updateTasks);

//  http://localhost:8081/tasks/delete/<id>
router.delete("/delete/:id", authMiddleware(["admin"]), deleteTask);

module.exports = router;
