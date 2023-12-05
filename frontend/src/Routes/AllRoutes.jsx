import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Task from "../Pages/Task";
import AddTask from "../Pages/AddTask";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/task"
        element={
          <PrivateRoute>
            <Task />
          </PrivateRoute>
        }
      />
      <Route
        path="/addTask"
        element={
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
