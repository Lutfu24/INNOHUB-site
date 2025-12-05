import Footer from "./components/Site/Footer";
import Header from "./components/Site/Header";
<<<<<<< HEAD
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
=======
import TeachersSectionUpdated from "./components/Site/TeachersSectionUpdated";
import { Slider } from "./components/Site/Slider";
import StatsSection from "./components/Site/StatsSection";
import PartnersAndStories from "./components/Site/PartnersStories";
function App() {
  return (
    <>
      <Header />
      <Slider />
      <StatsSection />
      <PartnersAndStories />
      <TeachersSectionUpdated />
      <Footer />
    </>
>>>>>>> d3e84f3ef1f865ccb9813a3f6939c48ca46d0f2f
  );
}

export default App;
