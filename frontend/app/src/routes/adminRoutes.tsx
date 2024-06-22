import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ProductPage from "../pages/productPage/productPage";
// import ProductPage from "./pages/productPage/productPage";

const AdminRoutes = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProductPage />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default AdminRoutes;
