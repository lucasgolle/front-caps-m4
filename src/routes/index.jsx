import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
export default Routers;
