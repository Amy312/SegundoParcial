import { Navigate } from "react-router-dom";

export const GuardedRoute = ({ auth, children }) => {
  if (auth) {
    return children;
  }
  console.log(auth, "change")
  return <Navigate to="/auth/login" />;
};