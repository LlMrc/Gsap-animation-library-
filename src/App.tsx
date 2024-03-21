import LandingPage from "./components/landing-page/landing-page";
import Project from "./components/project/project";
import Intro from "./components/intro/intro";
import About from "./components/about/about";

import Expertize from "./components/expertize/expertize";
import LocomotiveScroll from "locomotive-scroll";
import Experiences from "./components/experiences/experiences";
import Tools from "./components/tools/tools";
import Footer from "./components/footer/footer";

function App() {
  /*  ACCESS THE WINDOWS FOR NEXT.JS 
  useEffect(() => {
    {
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    }()
  }, []);

  */
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <main data-scroll-container className="main">
        <LandingPage />
        <Intro />
        <About />
        <Project />
        <Expertize />
        <Experiences />
        <Tools />
      </main>
      <Footer />
    </>
  );
}

export default App;
