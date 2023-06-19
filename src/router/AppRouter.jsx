import { Route, Routes } from "react-router-dom";
import { CalendarRoutes } from "../pages/calendar/routes/CalendarRoutes";
import { AuthRoutes } from "../pages/auth/routes/AuthRoutes";
import { useTask } from "../context/ContextProvider";

export const AppRouter = () => {
  const {auth } = useTask();
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes/>} />
      <Route path="/*" element={<CalendarRoutes/>} />
    </Routes>
  );
};