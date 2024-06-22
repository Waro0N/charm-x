import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import ProductPage from "./pages/productPage/productPage";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
