import styles from "./style.module.css";
import background from "../../images/background.jpg";
import image from "../../images/intro.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

//**************** */

function LandingPage() {
  const bg = useRef(null);
  const introImg = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const timeLime = gsap.timeline({
        scrollTrigger: {
          trigger: homeHeader.current,
          start: "center+=20% center",
          end: "bottom top+=200",
          scrub: true,
        },
      });
      timeLime
        .from(bg.current, { clipPath: `inset(15%)` })
        .to(introImg.current, { height: "200px" }, 0);
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div ref={homeHeader} className={styles.homeHeader}>
      <div ref={bg} className={styles.background}>
        <img src={background} alt="background image" />
      </div>

      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.8" className={styles.introImage}>
          <img ref={introImg} src={image} alt="intro image" />
        </div>

        <h1 data-scroll data-scroll-speed="0.3">
          smooth scroll
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
