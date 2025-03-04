import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/login/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
