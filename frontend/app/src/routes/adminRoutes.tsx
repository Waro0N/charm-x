import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard/adminDashboard";
import AdminLogin from "../pages/adminLogin/adminLogin";

const AdminRoutes = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default AdminRoutes;
