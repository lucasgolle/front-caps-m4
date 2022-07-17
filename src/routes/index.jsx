import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import Register from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default Routers;
