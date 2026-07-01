import { Navigate } from "react-router-dom";
import { useGuard } from "../../context/GuardContext";

const GuardProtectedRoute = ({ children }) => {
  const { token } = useGuard();

  if (!token) {
    return <Navigate to="/guard/login" replace />;
  }

  return children;
};

export default GuardProtectedRoute;