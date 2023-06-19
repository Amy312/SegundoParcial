import { Navigate, Route, Routes } from "react-router-dom";
import CalendarPage from "../CalendarPage";
import { useTask } from "../../../context/ContextProvider";
import { GuardedRoute } from '../../../guards/GuardedRoute';

export const CalendarRoutes
 = () => {
  const { auth } = useTask();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuardedRoute auth={auth}>
            <CalendarPage/>
          </GuardedRoute>
        }
      />
      
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};