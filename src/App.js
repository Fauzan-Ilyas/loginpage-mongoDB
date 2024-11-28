import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header.js";
import Login from "./pages/auth/login/Login.js";
import Signup from "./pages/auth/signup/Signup.js";
import Dashboard from "./pages/dashboard/Dashboard.js";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
