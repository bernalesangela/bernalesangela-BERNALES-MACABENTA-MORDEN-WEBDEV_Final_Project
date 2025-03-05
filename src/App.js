import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import CreateOrder from "./pages/admin/create-order";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-order" element={<CreateOrder />} />
        <Route path="/login/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
