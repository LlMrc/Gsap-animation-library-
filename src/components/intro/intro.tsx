import React from "react";
import style from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

interface Props {
  myStringArray: string[];
}

function Intro() {
  //description
  const description: string[] = [
    "Lorem Ipsum has been the industry's standard",
    "when an unknown printer took a galley of",
    "but also the leap into electronic typesetting",
    "when an unknown printer took a galley of",
  ];

  return (
    <div className={style.intro}>
      <AnimatedText myStringArray={description} />
    </div>
  );
}

export default Intro;

//Iterable text
const AnimatedText: React.FC<Props> = ({ myStringArray }) => {
  const text = useRef(null);

  //********************************* */
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "-=20px bottom",
        end: "bottom+=200px bottom",
      },
      left: "-200px",
      opacity: 0,
      ease: "power3.Out",
    });
  }, []);

  return (
    <>
      {myStringArray.map((item: string, index) => (
        <p ref={text} key={index}>
          {item}
        </p>
      ))}
    </>
  );
};
