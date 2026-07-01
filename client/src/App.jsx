import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import TicketPreview from "./pages/TicketPreview";
import GuardProtectedRoute from "./components/guard/GuardProtectedRoute";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";

import GuardLogin from "./pages/GuardLogin";
import GuardScanner from "./pages/GuardScanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer */}
        <Route path="/" element={<Home />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
       <Route
  path="/dashboard"
  element={
    <AdminProtectedRoute>
      <Dashboard />
    </AdminProtectedRoute>
  }
/>

        {/* Ticket */}
        <Route path="/ticket" element={<TicketPreview />} />

        {/* Guard */}
        <Route path="/guard/login" element={<GuardLogin />} />
        <Route
  path="/guard/scanner"
  element={
    <GuardProtectedRoute>
      <GuardScanner />
    </GuardProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;