import { Route, Routes } from "react-router-dom";
import Home from "./components/Site/Home";
import MainLayout from "./layout/MainLayout/MainLayout";
import Blog from "./components/Site/Blog";
import Elaqe from "./components/Site/Elaqe";
import Error from "./components/Site/Error";
import AboutUsPage from "./components/Site/About";
import EnglishSpeakingClubPage from "./components/Site/Cons";
import DigitalMarketingPage from "./components/Site/Digital";
import GraphicDesignPage from "./components/Site/Dizayn";
import UltraMinimalFilmClubPage from "./components/Site/Film";
import CareerPage from "./components/Site/Karyera";
import FullstackPage from "./components/Site/Web";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="elaqe" element={<Elaqe />} />
        <Route path="haqqimizda" element={<AboutUsPage />} />
        <Route path="ingilisdili" element={<EnglishSpeakingClubPage />} />
        <Route path="digital" element={<DigitalMarketingPage />} />
        <Route path="dizayn" element={<GraphicDesignPage />} />
        <Route path="film" element={<UltraMinimalFilmClubPage />} />
        <Route path="karyera" element={<CareerPage />} />
        <Route path="web" element={<FullstackPage />} />
      </Route>

      {/* <Routes></Routes> */}

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
