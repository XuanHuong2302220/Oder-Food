import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./layout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      {publicRoutes.map((pub) => {
        return (
          <Route
            path={pub.path}
            element={pub.path == '/login' || '/register' ?pub.element :<Layout>{pub.element}</Layout>}
            key={pub.path}
          />
        );
      })}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
