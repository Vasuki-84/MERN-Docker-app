import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
     

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Manage Your Tasks <span className="text-sky-500">Effortlessly</span>
        </h2>

        <p className="max-w-xl text-slate-600 text-lg mb-8">
          Stay organized, track progress, and complete your tasks faster with a
          simple and powerful task management system.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition"
          >
            Start Managing
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📝 Create Tasks</h3>
            <p className="text-slate-600">
              Add tasks with title, description, priority, and status.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📊 Track Progress</h3>
            <p className="text-slate-600">
              Easily track pending, in-progress, and completed tasks.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔐 Secure</h3>
            <p className="text-slate-600">
              JWT-based authentication keeps your tasks private and secure.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
