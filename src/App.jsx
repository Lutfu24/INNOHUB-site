import Footer from "./components/Site/Footer";
import Header from "./components/Site/Header";
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
  );
}

export default App;
