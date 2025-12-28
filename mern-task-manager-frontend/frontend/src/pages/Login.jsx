
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/user/login`, form);
      localStorage.setItem("token", response.data.token);
      navigate("/tasks");
    } catch (err) {
      alert("Login error");
    }
  };
  return (
    <div className="mx-auto max-w-sm p-6 mt-20 border border-sm  border-gray-400 rounded-sm  mb-10">
      <h2 className="text-center font-extrabold text-2xl mb-3 ">Login Page</h2>
      <form className="d-flex justify-center" onSubmit={handleSubmit}>
        <label className="text-lg text-gray-700 mb-2 mt-3">Email</label>
        <input
          type="email"
          placeholder="user@gmail.com"
          name="email"
          onChange={handleChange}
          className="w-full border border-2px rounded-sm shadow-lg  m-2 p-2 border-gray-300"
        />
        <label className="text-lg text-gray-700 mb-2 mt-3">Password</label>
        <input
          type="password"
          placeholder="********"
          name="password"
          onChange={handleChange}
          className="w-full border border-2px rounded-sm shadow-lg  m-2 p-2 border-gray-300"
        />
        <button
          type="submit"
          className="border border-blue-400 bg-blue-500 text-white rounded-lg px-3 py-2 mt-3 w-full cursor-pointer hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="text-center text-gray-600 font-sm  mt-3">
        <p>
          To create a new account
          <span className="text-orange-400 font-semibold">
            <Link to="/register"> Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
