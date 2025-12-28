import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
 
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/tasks"
          element={
            <ProtectedRoutes>
              <Tasks />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
