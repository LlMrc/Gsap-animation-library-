import LocomotiveScroll from "locomotive-scroll";
import LandingPage from "./components/landing-page/landing-page";
import Project from "./components/project/project";
import Intro from "./components/intro/intro";

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
      <div className="main">
        <LandingPage />
        <Intro />
        <Project />
      </div>
    </>
  );
}

export default App;
