import { Slider } from "./Slider";
import Raiting from "./Raiting";
import TeachersSection from "./TeachersSectionUpdated";
import PartnersStories from "./PartnersStories";
import FAQ from "./FAQ";
import Advan from "./Advan";
import { CalendarDemo } from "./Calendar";

function Home() {
  return (
    <>
      <Slider />
      <Raiting />
      <Advan />
      <TeachersSection />
      <PartnersStories />
      <FAQ />
      <CalendarDemo />
    </>
  );
}
export default Home;
