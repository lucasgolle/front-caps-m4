import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import LoginPage from "../pages/login";
import FormRegister from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Header />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<FormRegister />} />
    </Routes>
  );
};
export default Routers;
