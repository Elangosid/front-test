import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import React from "react";
import { AuthProvider } from "../context/AuthContext"; // Adjust the path as needed
import PrivateRoute from "../PrivateRoute"; // Adjust the path as needed

const Index = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Index;
