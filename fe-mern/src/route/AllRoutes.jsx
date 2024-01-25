// AllRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";
import Hero from "../components/Hero";
import Home from "../components/Home";

const AllRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AllRoutes;
