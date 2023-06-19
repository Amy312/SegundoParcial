import { Route, Routes } from "react-router-dom";
import { CalendarRoutes } from "../pages/calendar/routes/CalendarRoutes";
import { AuthRoutes } from "../pages/auth/routes/AuthRoutes";

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes/>} />
      <Route path="/*" element={<CalendarRoutes/>} />
    </Routes>
  );
};