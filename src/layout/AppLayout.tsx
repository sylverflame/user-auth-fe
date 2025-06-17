import React from "react";
import { Outlet } from "react-router-dom";
import SuspenseWrapper from "../components/SuspenseWrapper";
import Login from "../features/Login";
import useAuth from "../hooks/useAuth";

const AppLayout = () => {
  const { userLoggedIn, user } = useAuth();

  const Header = React.lazy(() => import("../features/Header"));

  if (!userLoggedIn || !user) {
    return <Login />;
  }
  return (
    <>
      <SuspenseWrapper element={<Header user={user} />} />
      <Outlet />
    </>
  );
};

export default AppLayout;
