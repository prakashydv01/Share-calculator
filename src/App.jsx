import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import routes from "./routes/routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path === "/" ? undefined : route.path}
              index={route.path === "/"}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;