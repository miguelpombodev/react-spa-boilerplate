import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../../features/auth/pages/LoginPage";
import { HomePage } from "../../features/home/pages/LoginPages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
