import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./../LoginPage";
import RegisterPage from "./../RegisterPage";
import { GuardedRoute } from "../../../guards/GuardedRoute";
import { useTask } from "../../../context/ContextProvider";

export const AuthRoutes = () => {
  const { auth } = useTask();
  console.log(auth, " en authroutes")
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route
        path="/*"
        element={
          <GuardedRoute auth={auth}>
            <Navigate to={"/"} />
          </GuardedRoute>
        }
      />
    </Routes>
  );
};
