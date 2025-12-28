import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">TaskManager</h1>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-slate-300 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-sky-400 text-black rounded-md font-medium hover:bg-sky-300 transition"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

   
      {menuOpen && (
        <div className="md:hidden bg-slate-800 text-white px-6 py-4 space-y-3">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-4 py-2 bg-sky-400 text-black rounded-md font-medium hover:bg-sky-300"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
