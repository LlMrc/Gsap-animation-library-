import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function Expertize() {
  const contentWidth = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(contentWidth, {
      trigger: contentWidth.current,
      scrub: true,
      start: "+=20px bottom",
      end: "bottom+=250px bottom",
    });
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h2>My Expertize</h2>
        <div ref={contentWidth} className={styles.content}>
          <div ref={container} className={styles.scroll}>
            <div className={styles.container}>
              <h2>React.js</h2>
              <h2>Next.js</h2>
              <h2>Flutter</h2>
              <h2>Jetpack Compose</h2>
              <h2>Apps develpoment</h2>
              <h2>Web develpoment</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertize;
