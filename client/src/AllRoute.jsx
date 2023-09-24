import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestions" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
    </Routes>
  );
};

export default AllRoute;
