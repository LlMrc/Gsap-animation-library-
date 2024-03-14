import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function Expertize() {
  const contentWidth = useRef(null);
  const container = useRef(null);

  const useContainerDimensions = (myRef: React.RefObject<any>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const getDimensions = () => ({
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight,
      });

      setDimensions(getDimensions());

      const handleResize = () => {
        setDimensions(getDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [myRef]);

    return dimensions;
  };

  const { width } = useContainerDimensions(contentWidth);
  let amountToScroll = width - window.innerWidth;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentWidth.current,
          start: "center+=40% 40%",
          end: "+=250" + amountToScroll,
          scrub: true,
          pin: true,
        },
      });

      tl.from(container.current, {
        x: -amountToScroll * 0.1,
        duration: 3,
        transition: "all 1s ease-in",
      }).to(
        container.current,
        {
          x: +amountToScroll - 450,
          duration: 3,
          transition: "all 1s ease-out",
        },
        0
      );
    });
    ctx.clear();
  }, []);

  return (
    <>
      <div ref={contentWidth} className={styles.wrapper}>
        <h2>My Expertize</h2>
        <div className={styles.scroll}>
          <div ref={container} className={styles.container}>
            <h2>React.js</h2>
            <h2>Next.js</h2>
            <h2>Flutter</h2>
            <h2>Jetpack Compose</h2>
            <h2>Cumputer network</h2>
            <h2>Mobile develpoment</h2>
            <h2>Web develpoment</h2>
            <h2>Computer Troubleshooting</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertize;
