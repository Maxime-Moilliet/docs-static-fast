import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/app/home/HomePage";
import { Error404, ErrorBoundary } from "@/errors";
import { Loader } from "@/components";

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/app">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
