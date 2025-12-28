import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getTasks = async () => {
    try {
      const res = await axios.get(`${baseUrl}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // POST API
  const createTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/tasks/create`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getTasks();
      setForm({ title: "", description: "", status: "", priority: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  // PUT API
  const updateTask = async (taskId) => {
    try {
      await axios.put(`${baseUrl}/tasks/update/${taskId}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getTasks();
      setForm({ title: "", description: "", status: "", priority: "" });
      setEditingTaskId(null);
    } catch (err) {
      alert(err.message);
    }
  };

  // DELETE API
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${baseUrl}/tasks/delete/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getTasks();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div>
      <div className="max-w-md mx-auto mt-10  border border-gray-300 p-7 rounded-sm  shadow-lg ">
        <h2 className="text-center font-extrabold text-2xl mb-3 ">
          Add your Tasks
        </h2>

        <div>
          <form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              editingTaskId ? updateTask(editingTaskId) : createTask(e);
            }}
          >
            <label className="mt-3 mb-2 text-gray-800 font-md">Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              placeholder="Task title"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-3 shadow-sm"
            />
            <label className="mt-3 mb-2 text-gray-800 font-md">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              type="text"
              placeholder="Describe about your task"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-3 shadow-sm"
            />
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full bg-gray-600 text-white border border-gray-300 rounded-lg py-2 px-3 mb-3 "
            >
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
              className="w-full  bg-gray-600 text-white border border-gray-300 rounded-lg py-2 px-3 mb-3"
            >
              <option>Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              type="submit"
              className="w-full mt-2 bg-green-600 hover:bg-green-400 text-white rounded-lg px-3 py-2 cursor-pointer"
            >
              {editingTaskId ? "Update Task" : "Add Task"}
            </button>
          </form>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">
              Are you sure? you want to{" "}
              <span className="text-red-400 text-sm font-semibold">
                <button onClick={handleLogout}>Logout</button>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* tasks */}
      <div className="mx-auto mt-8 max-w-6xl">
        <h2 className="mb-8  text-xl font-bold text-red-500 text-center ">
          My Tasks
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((data) => (
            <div
              key={data._id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex justify-between ">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.title}
                  </h3>
                </div>
                <div>
                  <button
                    className="  text-white px-1 py-1 rounded-full hover:bg-gray-200"
                    onClick={() => {
                      setForm({
                        title: data.title,
                        description: data.description,
                        status: data.status,
                        priority: data.priority,
                      });
                      setEditingTaskId(data._id);
                    }}
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTask(data._id)}
                    className="  text-white px-1 py-1 rounded-full hover:bg-gray-200"
                  >
                    ❌
                  </button>
                </div>
              </div>

              <p className="mt-2 text-md text-gray-600 mb-3">
                <span className="font-bold">Description:</span>{" "}
                {data.description}
              </p>
              <p className="bg-yellow-500 px-3 py-2 rounded mb-3">
                {data.status}
              </p>
              <p className=" bg-pink-400 px-3 py-2 rounded mb-2">
                {data.priority}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>

     
    </div>
  );
}

export default Tasks;
