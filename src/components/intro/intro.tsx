import style from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function Intro() {
  const text = useRef(null);
  //description
  const description = [
    "Welcome to my corner of the digital realm, where creativity meets functionality and pixels come to life. As a front-end developer, I specialize in weaving together code and design to craft immersive web experiences that captivate and inspire.",
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "10px bottom",
          end: "bottom+=330px bottom",
        },
      });
      t.from(text.current, { left: "-200px", opacity: 0, fontSize: "0vw" }).to(
        text.current,
        {
          left: "+200px",
          opacity: 1,

          fontSize: "1.8vw",
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={text} className={style.intro}>
      <p>{description}</p>
    </div>
  );
}

export default Intro;
