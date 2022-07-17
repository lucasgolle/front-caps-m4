import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
    </Routes>
  );
};
export default Routers;
