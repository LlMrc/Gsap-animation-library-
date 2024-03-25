import styles from "./style.module.css";
import background from "../../images/background.jpg";
import image from "../../images/intro.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import facebook from "../../images/icon/facebook.svg";
import twitter from "../../images/icon/twitter.svg";
import linkedin from "../../images/icon/linkedin.svg";

//**************** */

function LandingPage() {
  const bg = useRef(null);
  const introImg = useRef(null);
  const homeHeader = useRef(null);
  const title = useRef(null);

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
        .to(
          title.current,
          { letterSpacing: "15px", transition: "all .6s ease" },
          0
        )
        .to(introImg.current, { height: "200px" }, 0);
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let cntx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slide", {
        xPercent: "-100",
        duration: 1.1,
        ease: "power3.in",
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slide", {
          xPercent: -100,
          duration: 0.8,
          ease: "power3.out",
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, homeHeader);
    return () => cntx.revert();
  }, []);
  return (
    <section data-scroll-section ref={homeHeader} className={styles.homeHeader}>
      <div ref={bg} id="welcome" className={styles.background}>
        <img src={background} alt="background image" />
      </div>

      <div id="welcome" className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.9" className={styles.introImage}>
          <img ref={introImg} src={image} alt="intro image" />
        </div>

        <h1 ref={title} data-scroll data-scroll-speed="0.3">
          Welcome!
        </h1>
      </div>
      <div id="intro-slide" className={styles.introScreen}>
        <h1 id="title-1">Louis Marc Leonard</h1>
        <h1 id="title-2">Front-end</h1>
        <h1 id="title-3">Developer</h1>
      </div>
      <div id="welcome" className={styles.link}>
        <a href="https://web.facebook.com/LouisMrcVops">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://twitter.com/LouisMcLeonard1">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/louis-marc-leonard-a57a13192/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </section>
  );
}

export default LandingPage;
