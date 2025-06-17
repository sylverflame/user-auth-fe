import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type ProtectedRouteProps = {
  element: React.ReactNode;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps): React.ReactNode => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
