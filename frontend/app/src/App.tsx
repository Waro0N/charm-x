import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import ProductPage from "./pages/productPage/productPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
