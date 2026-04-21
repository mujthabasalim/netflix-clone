import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Player, Login } from "@/pages";
import { ProtectedRoute } from "@/components";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/player/:id"
        element={
          <ProtectedRoute>
            <Player />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
