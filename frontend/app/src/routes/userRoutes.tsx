import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ProductPage from "../pages/productPage/productPage";

const UserRoutes = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default UserRoutes;
