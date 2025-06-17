import "./App.css";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./features/ProtectedRoute";
import AppLayout from "./layout/AppLayout";
import React from "react";
import SuspenseWrapper from "./components/SuspenseWrapper";

const ViewUser = React.lazy(() => import("./pages/ViewUser"));
const Register = React.lazy(() => import("./features/Register"));

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="register"
            element={<SuspenseWrapper element={<Register />} />}
          />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="user">
              <Route index element={<Navigate to="/" replace />} />
              <Route
                path=":uid"
                element={
                  <ProtectedRoute
                    element={<SuspenseWrapper element={<ViewUser />} />}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
