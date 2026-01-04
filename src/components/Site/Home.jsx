import { Slider } from "./Slider";
import Raiting from "./Raiting";
import TeachersSection from "./TeachersSectionUpdated";
import PartnersStories from "./PartnersStories";
import FAQ from "./FAQ";
import Advan from "./Advan";

function Home() {
  return (
    <>
      <Slider />
      <Raiting />
      <Advan />
      <TeachersSection />
      <PartnersStories />
      <FAQ />
    </>
  );
}
export default Home;
