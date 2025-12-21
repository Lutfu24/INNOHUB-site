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
import Hackathons from "./components/Site/Hackathons";
import InnoTalks from "./components/Site/InnoTalks";
import ITHelpdeskPage from "./components/Site/ITHelpdeskPage";
import ScholarshipsWithDetail from "./components/Site/ScholarshipsSection";
import SocialEventsPage from "./components/Site/SocialEventsSection";
import SocialResponsibilityPage from "./components/Site/SocialResponsibility";
import TeachingFieldsPage from "./components/Site/TeachingFileds";
import UIUXDesignPage from "./components/Site/UIUXDesignPage";
import VacanciesPage from "./components/Site/VacanciesPage";
import VolunteerProgramsPage from "./components/Site/VolunteerProgramsPage";
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
        <Route path="IT" element={<FullstackPage />} />
        <Route path="hackathons" element={<Hackathons />} />
        <Route path="innotalks" element={<InnoTalks />} />
        <Route path="IThelp" element={<ITHelpdeskPage />} />
        <Route path="scholarship" element={<ScholarshipsWithDetail />} />
        <Route path="social" element={<SocialEventsPage />} />
        <Route
          path="socialresponsibility"
          element={<SocialResponsibilityPage />}
        />
        <Route path="teachingfield" element={<TeachingFieldsPage />} />
        <Route path="UIUX" element={<UIUXDesignPage />} />
        <Route path="vacancies" element={<VacanciesPage />} />
        <Route path="volunteerprograms" element={<VolunteerProgramsPage />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
