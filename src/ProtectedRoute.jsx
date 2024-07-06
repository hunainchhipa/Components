import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Components/contexts/AuthContext";

const ProtectedRoute = ({ element, requiredPermissions, ...rest }) => {
  const { userPermissions } = useAuth();

  if (
    !requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    )
  ) {
    return <Navigate to="/no-access" replace />;
  }

  return element;
};

export default ProtectedRoute;
