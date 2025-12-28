import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/user/register`, form);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="mx-auto max-w-sm p-6 mt-15 border border-sm  border-gray-400 rounded-sm mb-5 ">
      <h2 className="text-center font-extrabold text-2xl mb-3 ">
        Register Page
      </h2>
      <form className="d-flex justify-center" onSubmit={handleSubmit}>
        <label className="text-lg text-gray-700 mb-2 mt-3">Name</label>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
          className="w-full border border-2px rounded-sm shadow-lg  m-2 p-2 border-gray-300"
        />

        <label className="text-lg text-gray-700 mb-2 mt-3">Email</label>
        <input
          type="email"
          placeholder="user@gmail.com"
          name="email"
          onChange={handleChange}
          className="w-full border border-2px rounded-sm shadow-lg  m-2 p-2 border-gray-300"
        />
        <label className="text-lg text-gray-700 mb-2 mt-3"> Password</label>
        <input
          type="password"
          placeholder="******"
          name="password"
          onChange={handleChange}
          className="w-full border border-2px rounded-sm shadow-lg  m-2 p-2 border-gray-300"
        />
        <select
          onChange={handleChange}
          name="role"
          className="text-lg text-gray-700 mb-2 mt-3 w-full rounded-sm bg-gray-600 text-white border border-gray-300 rounded-lg py-2 px-3 "
        >
          <option value="">Select your role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="border border-blue-400 bg-blue-500 text-white rounded-lg px-3 py-2 mt-3 w-full cursor-pointer hover:bg-blue-600">
          Submit
        </button>
      </form>
      <div className="text-center text-gray-600 font-sm  mt-3">
        <p>
          Already have an account?{" "}
          <span className="text-orange-400 font-semibold">
            <Link to="/">Login</Link>
          </span>
        </p>
      </div>
     
    </div>
  );
}

export default Register;
