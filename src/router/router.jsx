import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Upload from "../pages/upload/upload";
import Addphoto from "../pages/Upload/Addphoto";
import Interest from "../pages/interest/Interest";
import Reason from "../pages/interest/Reason";
import Completion from "../pages/interest/completion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Addphoto" element={<Addphoto />} />
        <Route path="/reason" element={<Reason />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/completion" element={<Completion />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
