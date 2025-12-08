import { Route, Routes } from "react-router-dom";
import Home from "./components/Site/Home";
import MainLayout from "./layout/MainLayout/MainLayout";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import Blog from "./components/Site/Blog";
import Elaqe from "./components/Site/Elaqe";
import Error from "./components/Site/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="elaqe" element={<Elaqe />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
