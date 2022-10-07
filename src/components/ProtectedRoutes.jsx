import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const tokenExists = () => {
    const token = localStorage.getItem("token");
    if (token == undefined) {
      return false;
    } else {
      return true;
    }
  };

  if (tokenExists()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
