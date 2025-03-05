import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import CreateOrder from "./pages/admin/create-order";
import ProductsPage from "./pages/admin/products";
import NewProduct from "./pages/admin/products/new-product";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-order" element={<CreateOrder />} />
        <Route path="/admin/products" element={<ProductsPage />} />
        <Route path="/admin/products/new-product" element={<NewProduct />} />
        <Route path="/login/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
