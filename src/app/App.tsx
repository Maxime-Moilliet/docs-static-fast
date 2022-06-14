import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/app/home/HomePage";

export const App = () => {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
