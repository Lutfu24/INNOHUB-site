import { Route, Routes } from "react-router-dom";
import Home from "./components/Site/Home";
import MainLayout from "./layout/MainLayout/MainLayout";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
