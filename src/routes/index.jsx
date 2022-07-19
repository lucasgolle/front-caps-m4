import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import Register from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default Routers;
